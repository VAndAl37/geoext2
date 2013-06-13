Ext.define('GeoExt.form.field.LayerSwitcher', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.gx_layerswitcher',

    initComponent: function() {
        var me = this;

        Ext.apply(this, {
            store: this.bindMap(me.map),
            queryMode: 'local',
            triggerAction: 'all',
            valueField: 'title',
            displayField: 'title',
            editable: false,
            forceSelection: true
        });

        me.callParent();
    },

    
    bindStore: function(store, initial, propertyName) {
        var me = this,
            map;

        if(!(store instanceof GeoExt.data.LayerStore || Ext.isEmpty(store))) {
            Ext.Error.raise("Instance of 'GeoExt.data.LayerStore' required, but '" + Ext.getClassName(store) + "' given.");
        }

        if(store && (map = store.map)) {
            map.events.on({
                'changebaselayer': me.onChangeBaseLayer,
                'addlayer': me.onAddLayer,
                scope: me
            })

            me.on('select', me.onSelect, me);

            // if(map.baseLayer) {
            if(me.rendered) {
                me.onChangeBaseLayer();
            } else {
                me.on({
                    'render': {
                        fn: me.onChangeBaseLayer,
                        scope: me,
                        single: true
                    }
                })
            }
        }

        return me.callParent(arguments);
    },

    onUnbindStore: function(store) {
        var me = this,
            store = me.store,
            map = store.map;

        if(map) {
            map.events.un({
                'changebaselayer': me.onChangeBaseLayer,
                'addlayer': me.onAddLayer,
                scope: me
            })
            me.un('select', me.onSelect, me);
            map.events.unregister('changebaselayer', me, me.onChangeBaseLayer);
            
            me.clearValue();
            
            store.unbind();
            store.removeAll();
        }

        me.callParent(arguments);
    },

    bindMap: function(map) {
        var me = this;

        return Ext.create('GeoExt.data.LayerStore', {
            map: map,
            filterOnLoad: true,
            filters: [{
                filterFn: function(item) {
                    var layer = item.getLayer();
                    return layer.displayInLayerSwitcher === true && layer.isBaseLayer === true;
                }
            }]
        });
    },

    onSelect: function(combo, records, eOpts) {
        var me = this,
            map = me.store.map;
        if(map) { map.setBaseLayer(records[0].getLayer()); }
    },

    onAddLayer: function(evt) {
        var me = this,
            map = me.store.map,
            baseLayer = map.baseLayer;

        this.onChangeBaseLayer();
    },

    onChangeBaseLayer: function(evt) {
        var me = this,
            map = me.store.map,
            baseLayer = map.baseLayer;

        if(baseLayer && (Ext.isEmpty(me.getValue()) || me.getValue() !== baseLayer.name)) {
           me.setValue(baseLayer.name);
        }
    }
});