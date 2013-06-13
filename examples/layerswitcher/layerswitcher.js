/*
 * Copyright (c) 2008-2012 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See https://github.com/geoext/geoext2/blob/master/license.txt for the full
 * text of the license.
 */

Ext.require([
    'Ext.container.Viewport',
    'Ext.state.Manager',
    'Ext.state.CookieProvider',
    'Ext.window.MessageBox',
    'GeoExt.panel.Map',
	'GeoExt.form.field.LayerSwitcher'
]);

Ext.application({
    name: 'HelloGeoExt2',
    launch: function() {

        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider', {
            expires: new Date(new Date().getTime()+(1000*60*60*24*7)) //7 days from now
        }));

        var map = new OpenLayers.Map({});
        
        var layers = [
          new OpenLayers.Layer.WMS("Global Imagery",
            "http://maps.opengeo.org/geowebcache/service/wms", {
              layers: "bluemarble",
              format: "image/png8"
            }, {
              buffer: 0,
              visibility: false
            }
          ),
          new OpenLayers.Layer.WMS( "OpenLayers WMS",
            "http://vmap0.tiles.osgeo.org/wms/vmap0", {
              layers: 'basic'
            }, {
            }
          )
        ];
        map.addLayers(layers);
        
        mappanel = Ext.create('GeoExt.panel.Map', {
            title: 'The GeoExt.panel.Map-class',
            map: map,
            center: '12.3046875,51.48193359375',
            zoom: 6,
            stateful: true,
            stateId: 'mappanel',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                '->',
                {
                  xtype: 'gx_layerswitcher',
                  map: map
                }]
            }]
        });

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                mappanel
            ]
        });
    }
});
