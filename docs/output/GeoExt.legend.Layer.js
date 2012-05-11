Ext.data.JsonP.GeoExt_legend_Layer({"parentMixins":[],"inheritdoc":null,"extends":"Ext.container.Container","alternateClassNames":["GeoExt.LayerLegend"],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{},"name":"labelCls","id":"cfg-labelCls"},{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{},"name":"layerRecord","id":"cfg-layerRecord"},{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{"private":true},"name":"layerStore","id":"cfg-layerStore"},{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{},"name":"legendTitle","id":"cfg-legendTitle"},{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{},"name":"showTitle","id":"cfg-showTitle"},{"owner":"GeoExt.legend.Layer","tagname":"cfg","meta":{},"name":"types","id":"cfg-types"}],"method":[{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"getLabel","id":"method-getLabel"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"getLayerTitle","id":"method-getLayerTitle"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{},"name":"getTypes","id":"method-getTypes"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"onStoreAdd","id":"method-onStoreAdd"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"onStoreRemove","id":"method-onStoreRemove"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"onStoreUpdate","id":"method-onStoreUpdate"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{},"name":"supports","id":"method-supports"},{"owner":"GeoExt.legend.Layer","tagname":"method","meta":{"private":true},"name":"update","id":"method-update"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.LayerLegend</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.container.Container<div class='subclass '><strong>GeoExt.legend.Layer</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.legend.URL' rel='GeoExt.legend.URL' class='docClass'>GeoExt.legend.URL</a></div><div class='dependency'><a href='#!/api/GeoExt.legend.VectorLayer' rel='GeoExt.legend.VectorLayer' class='docClass'>GeoExt.legend.VectorLayer</a></div><div class='dependency'><a href='#!/api/GeoExt.legend.WMSLayer' rel='GeoExt.legend.WMSLayer' class='docClass'>GeoExt.legend.WMSLayer</a></div><h4>Files</h4><div class='dependency'><a href='source/Layer2.html#GeoExt-legend-Layer' target='_blank'>Layer.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-labelCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-labelCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-labelCls' class='name expandable'>labelCls</a><span> : String</span></div><div class='description'><div class='short'>Optional css class to use for the layer title labels. ...</div><div class='long'><p>Optional css class to use for the layer title labels.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-layerRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-layerRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-layerRecord' class='name expandable'>layerRecord</a><span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a></span></div><div class='description'><div class='short'>The layer record for the legend ...</div><div class='long'><p>The layer record for the legend</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-layerStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-layerStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-layerStore' class='name expandable'>layerStore</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>{GeoExt.data.LayerStore} ...</div><div class='long'><p>{<a href=\"#!/api/GeoExt.data.LayerStore\" rel=\"GeoExt.data.LayerStore\" class=\"docClass\">GeoExt.data.LayerStore</a>}</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-legendTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-legendTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-legendTitle' class='name expandable'>legendTitle</a><span> : String</span></div><div class='description'><div class='short'>Optional title to be displayed instead of the layer title. ...</div><div class='long'><p>Optional title to be displayed instead of the layer title.  If this is\nset, the value of <code>showTitle</code> will be ignored (assumed to be true).</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-showTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-showTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-showTitle' class='name expandable'>showTitle</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether or not to show the title of a layer. ...</div><div class='long'><p>Whether or not to show the title of a layer. This can be overridden\non the LayerStore record using the hideTitle property.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-types' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-cfg-types' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-cfg-types' class='name expandable'>types</a><span> : Array</span></div><div class='description'><div class='short'>An object containing a name-class mapping of LayerLegend subclasses. ...</div><div class='long'><p>An object containing a name-class mapping of LayerLegend subclasses.\nTo register as LayerLegend, a subclass should add itself to this object:</p>\n\n<p>GeoExt.GetLegendGraphicLegend = Ext.extend(<a href=\"#!/api/GeoExt.legend.Layer\" rel=\"GeoExt.legend.Layer\" class=\"docClass\">GeoExt.LayerLegend</a>, {\n});</p>\n\n<p><a href=\"#!/api/GeoExt.legend.Layer-cfg-types\" rel=\"GeoExt.legend.Layer-cfg-types\" class=\"docClass\">GeoExt.LayerLegend.types</a>[\"getlegendgraphic\"] =</p>\n\n<pre><code>GeoExt.GetLegendGraphicLegend;\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : String<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get the label text of the legend. ...</div><div class='long'><p>Get the label text of the legend.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayerTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-getLayerTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-getLayerTitle' class='name expandable'>getLayerTitle</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> record</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Get a title for the layer. ...</div><div class='long'><p>Get a title for the layer.  If the record doesn't have a title, use the\nname.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTypes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-getTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-getTypes' class='name expandable'>getTypes</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> layerRecord, Array preferredTypes</span> ) : Array</div><div class='description'><div class='short'>Gets an array of legend xtypes that support the provided layer record,\nwith optionally provided preferred types liste...</div><div class='long'><p>Gets an array of legend xtypes that support the provided layer record,\nwith optionally provided preferred types listed first.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerRecord</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'><p>A layer record to get\nlegend types for. If not provided, all registered types will be\nreturned.</p>\n</div></li><li><span class='pre'>preferredTypes</span> : Array<div class='sub-desc'><p>Types that should be considered.\nfirst. If not provided, all registered legend types will be returned\nin the order of their score for support of the provided layerRecord.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>xtypes of legend types that can be used with\nthe provided layerRecord.</p>\n</div></li></ul></div></div></div><div id='method-onStoreAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-onStoreAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-onStoreAdd' class='name expandable'>onStoreAdd</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Index index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for add event of the layerStore ...</div><div class='long'><p>Handler for add event of the layerStore</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store to which the record was\nadded.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the added layer.</p>\n</div></li><li><span class='pre'>index</span> : Index<div class='sub-desc'><p>The index in the store at which the record\nwas added.</p>\n</div></li></ul></div></div></div><div id='method-onStoreRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-onStoreRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-onStoreRemove' class='name expandable'>onStoreRemove</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, Integer index</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Handler for remove event of the layerStore ...</div><div class='long'><p>Handler for remove event of the layerStore</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store from which the record was\nremoved.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the removed layer.</p>\n</div></li><li><span class='pre'>index</span> : Integer<div class='sub-desc'><p>The index in the store at which the record\nwas remvoed.</p>\n</div></li></ul></div></div></div><div id='method-onStoreUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-onStoreUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-onStoreUpdate' class='name expandable'>onStoreUpdate</a>( <span class='pre'>Ext.data.Store store, Ext.data.Record record, String operation</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Update a the legend. ...</div><div class='long'><p>Update a the legend. Gets called when the store fires the update event.\nThis usually means the visibility of the layer, its style or title\nhas changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store in which the record was\nchanged.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>The record object corresponding\nto the updated layer.</p>\n</div></li><li><span class='pre'>operation</span> : String<div class='sub-desc'><p>The type of operation.</p>\n</div></li></ul></div></div></div><div id='method-supports' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-supports' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-supports' class='name expandable'>supports</a>( <span class='pre'><a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a> layerRecord</span> ) : Integer</div><div class='description'><div class='short'>Checks whether this legend type supports the provided layerRecord. ...</div><div class='long'><p>Checks whether this legend type supports the provided layerRecord.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layerRecord</span> : <a href=\"#!/api/GeoExt.data.LayerModel\" rel=\"GeoExt.data.LayerModel\" class=\"docClass\">GeoExt.data.LayerRecord</a><div class='sub-desc'><p>The layer record\nto check support for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>score indicating how good the legend supports the\nprovided record. 0 means not supported.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.legend.Layer'>GeoExt.legend.Layer</span><br/><a href='source/Layer2.html#GeoExt-legend-Layer-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.legend.Layer-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Updates the legend. ...</div><div class='long'><p>Updates the legend.</p>\n</div></div></div></div></div></div></div>","subclasses":["GeoExt.legend.URL","GeoExt.legend.VectorLayer","GeoExt.legend.WMSLayer"],"meta":{},"html_meta":{},"name":"GeoExt.legend.Layer","files":[{"href":"Layer2.html#GeoExt-legend-Layer","filename":"Layer.js"}],"mixedInto":[],"aliases":{"widget":["gx_layerlegend"]},"id":"class-GeoExt.legend.Layer","superclasses":["Ext.container.Container"]});