sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    return Controller.extend("project1.controller.LandingPage", {
        onHomePress: function () {
            sap.m.MessageToast.show("Home clicked");
        },

        onCreateMatchPress: function () {
            sap.m.MessageToast.show("Create Match clicked");
        },

        onMatchHistoryPress: function () {
            sap.m.MessageToast.show("Match History clicked");
        },

        onAddTeamPress: function () {
            sap.m.MessageToast.show("Add Team clicked");
        },

        onAddGroundPress: function () {
            sap.m.MessageToast.show("Add Ground clicked");
        },

        onAddUmpirePress: function () {
            sap.m.MessageToast.show("Add Umpire clicked");
        }
    });
});
