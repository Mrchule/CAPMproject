sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
   "./Navbar.controller"
], (Controller, MessageToast, MessageBox) => {
  "use strict";

  return Controller.extend("project1.controller.Index", {

    onShowHello: function () {
      const oView = this.getView();
      const oModel = oView.getModel();

      const groundID = oView.byId("groundSelect").getSelectedKey();
      const umpireID = oView.byId("umpire").getSelectedKey();
      const team1ID =  oView.byId("team11").getSelectedKey();
      const team2ID = oView.byId("team12").getSelectedKey();
      const dateVal = oView.byId("datePicker1").getDateValue();

      if (!groundID && !umpireID && !team1ID && !team2ID && !dateVal) {
        MessageBox.warning("Please select all values before submitting.");
        return;
      }

      var groundName = this.getView().byId("groundSelect").getSelectedItem().getText();
      var umpireName = this.getView().byId("umpire").getSelectedItem().getText();
      var team1Name = this.getView().byId("team11").getSelectedItem().getText();
      var team2Name = this.getView().byId("team12").getSelectedItem().getText();

      const formattedDate = dateVal.toISOString().split("T")[0];

      const oData = {
        ID: Math.floor(Math.random() * 1000000),
        Match_date: formattedDate,
        ground_ID: parseInt(groundID),
        umpire_ID: parseInt(umpireID),
        team1_ID: parseInt(team1ID),
        team2_ID: parseInt(team2ID)
      };

      console.log("Payload:", oData);

      const oListBinding = oModel.bindList("/MatchSetup");
      console.log(oListBinding);
      
      const oContext = oListBinding.create(oData);

      oContext.created().then(() => {
        MessageToast.show("Match setup saved successfully!");
      }).catch((oError) => {
        console.error("Error saving match setup", oError);
        MessageToast.show("Failed to save match setup.");
      });
    },

    onHistoryPress : function(){
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("History");
      console.log("routing......");
      
    },
    onHomePress : function(){
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("LandingPage");
      console.log("routing......");
    },
    onMatch : function(){
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Index");
      console.log("same page......");
    }

  });
});
