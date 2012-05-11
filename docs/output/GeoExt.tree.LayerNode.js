Ext.data.JsonP.GeoExt_tree_LayerNode({"parentMixins":[],"inheritdoc":null,"extends":"Ext.AbstractPlugin","alternateClassNames":[],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":["Ext.util.Observable"],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.tree.LayerNode","tagname":"cfg","meta":{},"name":"checkedGroup","id":"cfg-checkedGroup"},{"owner":"GeoExt.tree.LayerNode","tagname":"cfg","meta":{},"name":"fixedText","id":"cfg-fixedText"}],"method":[{"owner":"GeoExt.tree.LayerNode","tagname":"method","meta":{},"name":"init","id":"method-init"},{"owner":"GeoExt.tree.LayerNode","tagname":"method","meta":{},"name":"onCheckChange","id":"method-onCheckChange"},{"owner":"GeoExt.tree.LayerNode","tagname":"method","meta":{},"name":"onLayerVisibilityChanged","id":"method-onLayerVisibilityChanged"},{"owner":"GeoExt.tree.LayerNode","tagname":"method","meta":{},"name":"onMapMoveend","id":"method-onMapMoveend"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><strong>GeoExt.tree.LayerNode</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Files</h4><div class='dependency'><a href='source/LayerNode.html#GeoExt-tree-LayerNode' target='_blank'>LayerNode.js</a></div></pre><div class='doc-contents'><p>The LayerNode plugin</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-checkedGroup' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-cfg-checkedGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-cfg-checkedGroup' class='name expandable'>checkedGroup</a><span> : String</span></div><div class='description'><div class='short'>If provided, nodes will be rendered with a radio button instead of a\ncheckbox. ...</div><div class='long'><p>If provided, nodes will be rendered with a radio button instead of a\ncheckbox. All layers represented by nodes with the same checkedGroup are\nconsidered mutually exclusive - only one can be visible at a time.</p>\n</div></div></div><div id='cfg-fixedText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-cfg-fixedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-cfg-fixedText' class='name not-expandable'>fixedText</a><span> : Boolean</span></div><div class='description'><div class='short'><p>If the node was configured with a text, we consider the text fixed and\nwon't update it when the layer's name changes.</p>\n</div><div class='long'><p>If the node was configured with a text, we consider the text fixed and\nwon't update it when the layer's name changes.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-method-init' class='name expandable'>init</a>( <span class='pre'>Ext.Component target</span> )</div><div class='description'><div class='short'>The init method is invoked after initComponent method has been run for the client Component. ...</div><div class='long'><p>The init method is invoked after initComponent method has been run for the client Component.</p>\n\n<p>It perform plugin initialization.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Ext.Component<div class='sub-desc'><p>The client Component which owns this plugin.</p>\n</div></li></ul></div></div></div><div id='method-onCheckChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-method-onCheckChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-method-onCheckChange' class='name expandable'>onCheckChange</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>private: method[onCheckChange]\n :param node: GeoExt.tree.LayerNode\n :param checked: Boolean\n\n handler for checkchange...</div><div class='long'><p>private: method[onCheckChange]\n :param node: <code><a href=\"#!/api/GeoExt.tree.LayerNode\" rel=\"GeoExt.tree.LayerNode\" class=\"docClass\">GeoExt.tree.LayerNode</a></code>\n :param checked: <code>Boolean</code></p>\n\n<p> handler for checkchange events</p>\n</div></div></div><div id='method-onLayerVisibilityChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-method-onLayerVisibilityChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-method-onLayerVisibilityChanged' class='name expandable'>onLayerVisibilityChanged</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>private: method[onLayerVisiilityChanged\n handler for visibilitychanged events on the layer\n@scope (Ext.data.NodeInter...</div><div class='long'><p>private: method[onLayerVisiilityChanged\n handler for visibilitychanged events on the layer\n@scope (Ext.data.NodeInterface) current node</p>\n</div></div></div><div id='method-onMapMoveend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.LayerNode'>GeoExt.tree.LayerNode</span><br/><a href='source/LayerNode.html#GeoExt-tree-LayerNode-method-onMapMoveend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerNode-method-onMapMoveend' class='name expandable'>onMapMoveend</a>( <span class='pre'>Object evt</span> )</div><div class='description'><div class='short'>private: method[onMapMoveend]\n :param evt: OpenLayers.Event\n\n handler for map moveend events to determine if node sho...</div><div class='long'><p>private: method[onMapMoveend]\n :param evt: <code>OpenLayers.Event</code></p>\n\n<p> handler for map moveend events to determine if node should be\n disabled or enabled</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.tree.LayerNode","files":[{"href":"LayerNode.html#GeoExt-tree-LayerNode","filename":"LayerNode.js"}],"mixedInto":[],"aliases":{"plugin":["gx_layer"]},"id":"class-GeoExt.tree.LayerNode","superclasses":["Ext.AbstractPlugin"]});