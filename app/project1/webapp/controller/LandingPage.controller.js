sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
     "./Navbar.controller"
], (Controller) => {
    "use strict";
    return Controller.extend("project1.controller.LandingPage", {
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
