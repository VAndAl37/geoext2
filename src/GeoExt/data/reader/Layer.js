Ext.define('GeoExt.data.reader.Layer', {
    extend:  Ext.data.reader.Json ,
    alternateClassName: 'GeoExt.data.LayerReader',
    alias : 'reader.gx_layerreader',
    
    extractData: function(data) {
        Ext.each(data, function(layer, i) {
            if(!(layer instanceof OpenLayers.Layer)) { data[i] = Ext.create.apply(null, layer); }
        })
        
        return this.callParent([data]);
    }
});