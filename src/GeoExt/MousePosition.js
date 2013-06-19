Ext.define('GeoExt.MousePosition', {
    extend: 'Ext.button.Cycle',
    // extend: 'Ext.button.Split',
    alias: 'widget.gx_mouseposition',
    
    requires: [
        'GeoExt.MousePositionManager'
    ],

    initComponent: function() {
        var me = this;
        me.manager = GeoExt.MousePositionManager;
        me.callParent();
    },

    onRender: function() {
        var me = this;
        me.callParent();
        me.manager.on('update', me.updateValue, me);
    },

    updateValue: function(evt) {
        var me = this;
        me.btnInnerEl.update(evt.value);
    },

    onDestroy: function() {
        var me = this;
        me.manager.un('update', me.updateValue, me);
        me.callParent();
    },

    changeHandler: function(cycleBtn, activeItem) {
        var me = this;
        me.manager.setFormat(activeItem);
    },

    getState: function() {
        return this.addPropertyToState(
            this.callParent(),
            'format',
            this.getActiveItem().text
        );
    },

    applyState: function(state) {
        var me = this,
            activeItem;

        if(state.format) {
            format = me.menu.items.findBy(function(item) {
                return item.text === state.format;
            })
            if(format) {
                me.setActiveItem(format, true);
            }
            delete state.format;
        }
        return me.callParent(arguments);
    }
})
