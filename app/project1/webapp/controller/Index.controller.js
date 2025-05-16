sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel) => {
  "use strict";
  return Controller.extend("project1.controller.Index", {
    onShowHello: function () {
      sap.m.MessageToast.show("Submitted Sucessfully");
  },
});
});