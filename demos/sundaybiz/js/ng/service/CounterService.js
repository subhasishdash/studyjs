app.service('counterService', function() {
	 var fmea = {
        severity_rating : 3,
        occurence_rating : 3,
        detection_rating : 3,
        classification : 3,
        sites : 2,
        departments : 4,
        customers : 7,
        parts : 5,
        fmeatypes : 1
    };

    var asset_tracking = {
        asset_categories : 3,
        departments : 3,
        dispositions : 3,
        manufacturers : 8,
        models : 7,
        options : 3,
        pm_frequency : 4,
        vendors : 8,
        unschedule_maint_priority : 2
    };

    var ground_control = {
    	class_types : 3,
    	document_categories : 2,
    	locations : 2,
    	criticality : 4,
    	departments : 4,
    	employee_types : 2
    };

    var q_med = {
    	disposition : 3,
    	parts : 5,
    	root_causes : 2,
    	sites : 2,
    	suppliers : 8,
    	audit_types : 3,
    	car_types : 2,
    	categories : 2,
    	customers : 7,
    	defects : 2,
    	departments : 4
    };

    var vendor_mgmt = {
    	carriers : 1,
    	categories : 2,
    	grades : 4,
    	status : 3,
    	types : 3
    };

    var spc_keeper = {

    };

    var t_med = {

    };

    var training = {
    	class_types : 3,
    	class_categories : 3,
    	document_categories : 2,
    	employee_types : 2,
    	criticality : 4,
    	departments : 4
    };

    var quality = {
    	audit_types : 3,
    	car_types : 2,
    	categories : 2,
    	criticality : 3,
    	customers : 15,
    	defects : 2,
    	departments : 4,
    	meeting_type : 2,
    	parts : 5,
    	root_causes : 2,
    	sites : 2,
    	suppliers : 15
    };

	this.getCount = function (menu, type) {
		return eval(menu)[type];
	};
});