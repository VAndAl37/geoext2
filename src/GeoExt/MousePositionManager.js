Ext.define('GeoExt.MousePositionManager', {
    singleton: true,
    
    map: null,
    
    enabled: false,
    
    requires: [
        'GeoExt.panel.Map',
        'OpenLayers.Map'
    ],

    mixins: {
        observable: Ext.util.Observable
    },

    PARAM_NAMES: [
        'prefix',
        'separator',
        'suffix',
        'numDigits',
        'granularity',
        'emptyString',
        'formatOutput',
        'displayProjection'
    ],

    constructor: function(config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);
        me.self.borrow(OpenLayers.Control.MousePosition, me.PARAM_NAMES);

        me.addEvents(
            'enable',
            'disable',
            'update'
        );
    },

    enable: function(map) {
        var me = this;

        if (me.enabled) { return false; }

        if (!map) { map = GeoExt.panel.Map.guess(); }
        if (map instanceof GeoExt.panel.Map) { map = map.map; }
        if (!(map instanceof OpenLayers.Map)) { throw new Error('Map not exists.'); }
        if (!map.unloadDestroy) { throw new Error('Map is destroyed.'); }

        me.map = map;
        me.enabled = true;

        map.events.register('mousemove', me, me.set);
        map.events.register('mouseout', me, me.reset);
        map.events.register('zoomend', me, me.set);

        me.fireEvent('enable', me);
        return true;
    },
    
    disable: function() {
        var me = this,
            map = me.map;

        if (!me.enabled) { return false; }

        me.enabled = false;

        if(!!map.unloadDestroy) {
            map.events.unregister('mousemove', me, me.set);
            map.events.unregister('mouseout', me, me.reset);
            map.events.unregister('zoomend', me, me.set);
        }

        map = me.map = null;

        me.fireEvent('disable', me);

        return true;
    },

    set: function(evt) {
        var me = this,
            map = me.map,
            lonLat;

        if (evt == null) {
            me.reset();
            return;
        } else {
            // Zoomend event does not include xy, get it last values
            if(!evt.xy && null !== me.lastXy) { evt.xy = me.lastXy; }
            
            if (me.lastXy == null ||
                Math.abs(evt.xy.x - me.lastXy.x) > me.granularity ||
                Math.abs(evt.xy.y - me.lastXy.y) > me.granularity)
            {
                me.lastXy = evt.xy;
                return;
            }

            lonLat = map.getLonLatFromPixel(evt.xy);
            if (!lonLat) {
                // map has not yet been properly initialized
                return;
            }
            if (me.displayProjection) {
                lonLat.transform(map.getProjectionObject(),  me.displayProjection);
            }
            me.lastXy = evt.xy;
            me.lonLat = lonLat;

            me.fireEvent('update', {value: me.formatOutput(lonLat), lonLat: lonLat});
        }
    },

    reset: function(evt) {
        //TODO 
    },

    setDisplayProjection: function(projection) {
        var me = this;
        if(Ext.isString(projection)) {
            projection = new OpenLayers.Projection(projection);
        }

        if(projection instanceof OpenLayers.Projection) {
            me.displayProjection = projection;
        } else {
            throw new Error('Bad Projection!');
        }
    },

    setFormat: function(format) {
        var me = this,
            format = format || {},
            setter;

        Ext.Array.each(me.PARAM_NAMES, function(paramName) {
            if(!Ext.isDefined(format[paramName])) {
                delete me[paramName];
            } else {
                setter = 'set' + Ext.String.capitalize(paramName);
                if(Ext.isFunction(setter)) {
                    me[setter](format[paramName]);
                } else {
                    me[paramName] = format[paramName];
                }
            }
            
        });

        me.set({});
    }
});
