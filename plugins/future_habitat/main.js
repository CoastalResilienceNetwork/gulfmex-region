define([
        "dojo/_base/declare",
        "framework/PluginBase"
       ],
       function (declare, PluginBase) {
           return declare(PluginBase, {
               toolbarName: "Future Habitat",
               toolbarType: "sidebar",
               allowIdentifyWhenActive: true,
               activate: function () { },
               deactivate: function () { },
               hibernate: function () { },
               initialize: function () { },
               getState: function () { },
               setState: function () { },
           });
       });
