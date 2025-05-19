sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
    "use strict";
  
    return Controller.extend("project1.controller.Navbar", {
        onInit: function() {
            console.log("Navbar Controller initialized");
            
        },
        press: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("LandingPage");
        },
        onHistoryPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("History");
            console.log("routing......");

        },
        onHomePress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("LandingPage");
            console.log("routing......");
        },
        onMatch: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Index");
            console.log("same page......");
        }

    });
  });
  