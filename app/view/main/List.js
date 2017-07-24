/**
 * This view is an example list of people.
 */
Ext.define('LayoutApp.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',
    cls : 'main-list',
    frame : true,
    scrollable : true,
    padding : 2,
    defaults : {
        xtype : 'container',
        cls : 'tile',
        padding : 2,
        widthPct :.5,
        minWidth : 250,
        layout : 'fit',
        items : {
            frame : true
        }
    },
    listeners : {
        resize : function(v){
            var size = v.getSize();

            v.items.each(function(itm){
                var w=size.width*itm.widthPct;
                var h=(size.height-10)*itm.heightPct;
                var width = w > itm.minWidth ? '50%' : '98%';
                var height = h > itm.minHeight ? h : itm.minHeight;

                itm.setWidth(width);
                itm.setHeight(height);
            });
        }
    },
    initComponent : function(){
        this.items = [
            {
                heightPct :.3,
                minHeight : 150
            },
            {
                heightPct :.3,
                minHeight : 150
            },
            {
                heightPct :.4,
                minHeight : 200
            },
            {
                heightPct :.4,
                minHeight : 200
            },
            {
                heightPct :.3,
                minHeight : 150
            },
            {
                heightPct :.3,
                minHeight : 150
            }
        ];
        this.callParent(arguments);
    }
});
