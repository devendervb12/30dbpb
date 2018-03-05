sap.ui.controller("zempview.EmpView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zempview.EmpView
*/
	onInit: function() {
        // instantiatating model
		
		var oModel = new sap.ui.model.json.JSONModel();
		
		//loading data into model
		oModel.loadData("model/data.json");
		
		//setting visiblity of the model
		this.getView().setModel(oModel);
		
		//get the reference of cname text
	var oenText = 	this.getView().byId("idName");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zempview.EmpView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zempview.EmpView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zempview.EmpView
*/
//	onExit: function() {
//
//	}

});