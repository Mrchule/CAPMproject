sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel) => {
  "use strict";
  return Controller.extend("project1.controller.Index", {
    onSelectTeam1: function(oEvent){
      var name=oEvent.getSource();
      var team1=name.getSelectedItem().getText();
      console.log(team1);
    },
    onSelectTeam2: function(oEvent){
      var name1=oEvent.getSource();
      var team2=name1.getSelectedItem().getText();
      console.log(team2);
    },
    onSelectground: function(oEvent){
      var name2=oEvent.getSource();
      var ground=name2.getSelectedItem().getText();
      console.log(ground);
    },
    onSelectUmpire: function(oEvent){
      var name3=oEvent.getSource();
      var ump=name3.getSelectedItem().getText();
      console.log(ump);
    },
    



    onShowHello: function () {
      // const oModel=this.getView().getModel();
      // var odata={
      //   groundname: ground,
      //   team1name:team1,
      //   team2name:team2,
      //   date1: this.byId("datePicker1").getValue(),
      // };
      // console.log(odata);
      // oModel.create("/MatchSetup" , odata,{
      //   sucess: function(){
      //     MessageToast.show("data saved");
      //   },
      //   error: function(){
      //     MessageToast.show("data not found");

      //   }
      // })
      MessageToast.show("Submitted Sucessfully");
  },
});
});