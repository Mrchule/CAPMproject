sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "./Navbar.controller"
], (Controller) => {
    "use strict";
    return Controller.extend("project1.controller.History", {
        onInit: function () {
        var oTable = this.byId("matchTable");

        oTable.attachEventOnce("updateFinished", function () {
            var oBinding = oTable.getBinding("items");
    
            // Sort by Match_date in ascending order (set true for descending)
            var oSorter = new sap.ui.model.Sorter("Match_date", false);
            oBinding.sort(oSorter);
        });
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
