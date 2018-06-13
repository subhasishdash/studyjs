var fillFMEA = function () {

};

app.service('rendererService', function() {
    this.fillSetupDOM = function (data, setup_type, setup_menu) {
        var inputData = data.data || data;
        var htmlData = '', htmlStart = '<tr><td><input type="checkbox"/></td>', htmlEnd = '</tr>';
        var pageElement = angular.element(document.getElementById(setup_type));
        pageElement.html('');
        switch (setup_menu) {
        	case 'fmea' :
	        switch (setup_type) {
	        	case 'severity_rating' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
		                htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.severity_value)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.short_description)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.full_description)) + '</td>';
		                htmlData += htmlEnd;
			        }
	        	})();
	        	break;

	        	case 'occurence_rating' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.occurence_value)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.short_description)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.full_description)) + '</td>';
			        }
	        	})();
	        	break;

				case 'detection_rating' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.detection_value)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.short_description)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.full_description)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'classification' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.classification)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.short_description)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.full_description)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'sites' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.sites)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'departments' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_code)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_name)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.manager_name)) + '</td>';
		                htmlData += '<td>' + (innerObj[3] || atob(innerObj.dept_active)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'customers' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.cust_code)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.company_name)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.billing_address)) + '</td>';
		                htmlData += '<td>' + (innerObj[3] || atob(innerObj.city)) + '</td>';
		                htmlData += '<td>' + (innerObj[4] || atob(innerObj.state)) + '</td>';
		                htmlData += '<td>' + (innerObj[5] || atob(innerObj.pincode)) + '</td>';
		                htmlData += '<td>' + (innerObj[6] || atob(innerObj.country)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'parts' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.part_no)) + '</td>';
		                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
		                htmlData += '<td>' + (innerObj[2] || atob(innerObj.revision)) + '</td>';
		                htmlData += '<td>' + (innerObj[3] || atob(innerObj.alias)) + '</td>';
		                htmlData += '<td>' + (innerObj[4] || atob(innerObj.active)) + '</td>';
			        }
	        	})();
	        	break;

	        	case 'fmeatypes' : (function () {
			        for (var j = 0; j < inputData.length; j++) {
			            var innerObj = inputData[j];
			            htmlData += htmlStart;
		                htmlData += '<td>' + (innerObj[0] || atob(innerObj.fmea_type)) + '</td>';
			        }
	        	})();
	        	break;
	        }
	        break;

	        case 'asset_tracking' : 
		        switch (setup_type) {
		        	case 'asset_categories' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.asset_category)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'departments' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_name)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_number)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'dispositions' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.disposition)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'manufacturers' :
		        	case 'vendors' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.name)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.address)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.city)) + '</td>';
			                htmlData += '<td>' + (innerObj[3] || atob(innerObj.state)) + '</td>';
			                htmlData += '<td>' + (innerObj[4] || atob(innerObj.postal)) + '</td>';
			                htmlData += '<td>' + (innerObj[5] || atob(innerObj.country)) + '</td>';
			                htmlData += '<td>' + (innerObj[6] || atob(innerObj.fn)) + '</td>';
			                htmlData += '<td>' + (innerObj[7] || atob(innerObj.ln)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'models' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.model_number)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.manufacturer)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.asset_desc)) + '</td>';
			                htmlData += '<td>' + (innerObj[3] || atob(innerObj.warranty_period)) + '</td>';
			                htmlData += '<td>' + (innerObj[4] || atob(innerObj.callibration_cost)) + '</td>';
			                htmlData += '<td>' + (innerObj[5] || atob(innerObj.warning)) + '</td>';
			                htmlData += '<td>' + (innerObj[6] || atob(innerObj.notes)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'options' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.parameter)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.parameter_value)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.explanation)) + '</td>';
				        }
		        	})();
		        	break;

		        	case 'pm_frequency' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.type)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.frequency)) + '</td>';
			                htmlData += '<td>' + (innerObj[2] || atob(innerObj.description)) + '</td>';
			                htmlData += '<td>' + (innerObj[3] || atob(innerObj.default_counter)) + '</td>';
				        }
		        	})();
		        	break;
		        	
		        	case 'unschedule_maint_priority' : (function () {
				        for (var j = 0; j < inputData.length; j++) {
				            var innerObj = inputData[j];
			                htmlData += htmlStart;
			                htmlData += '<td>' + (innerObj[0] || atob(innerObj.priority)) + '</td>';
			                htmlData += '<td>' + (innerObj[1] || atob(innerObj.sort_order)) + '</td>';
				        }
		        	})();
		        	break;
		        }
		        break;

			    case 'ground_control' : 
			    	switch (setup_type) {
			    		case 'class_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.class_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'document_categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.document_category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'locations' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.document_location)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.location_description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'criticality' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.criticality)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.t_criticality)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'departments' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_number)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.manager_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'employee_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.employee_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.class)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'training_class_categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
			    	}
			    	break;

		    	case 'q_med' : 
			    	switch (setup_type) {
			    		case 'disposition' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.disposition)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'parts' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.part_no)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.revision)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.alias)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'root_causes' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'sites' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.site)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'suppliers' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.code_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.company_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.billing_address)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.city)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.state)) + '</td>';
				                htmlData += '<td>' + (innerObj[5] || atob(innerObj.postal)) + '</td>';
				                htmlData += '<td>' + (innerObj[6] || atob(innerObj.country)) + '</td>';
				                htmlData += '<td>' + (innerObj[7] || atob(innerObj.phone)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'audit_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.audit_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'car_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.car_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'customers' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.customer_code)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.company_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.billing_address)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.city)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.state)) + '</td>';
				                htmlData += '<td>' + (innerObj[5] || atob(innerObj.pin)) + '</td>';
				                htmlData += '<td>' + (innerObj[6] || atob(innerObj.country)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
		        		case 'defects' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.defect_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'departments' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_code)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.manager_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
			    	}
			    	break;

		    	case 'vendor_mgmt' : 
			    	switch (setup_type) {
			    		case 'carriers' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.carrier_name)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.vendor_category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'grades' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.vendor_grade)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.min_score)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.max_score)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.vendor_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.special)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'status' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.vendor_status)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.allow_po)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
			    	}
			    	break;

		    	case 'spc_keeper' : 
			    	switch (setup_type) {

			    	}

			    	break;

		    	case 't_med' : 
			    	switch (setup_type) {

			    	}
			    	break;

		    	case 'training' : 
			    	switch (setup_type) {
			    		case 'class_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.class_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'class_categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'document_categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.document_category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'employee_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.employee_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.class)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'criticality' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.criticality)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.t_criticality)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'departments' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_code)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.manager_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
			    	}
			    	break;

		    	case 'quality' : 
			    	switch (setup_type) {
			    		case 'audit_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.audit_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'car_types' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.car_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'categories' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.category)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'criticality' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.criticality)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.sort_order)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'customers' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.customer_code)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.company_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.billing_address)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.city)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.state)) + '</td>';
				                htmlData += '<td>' + (innerObj[5] || atob(innerObj.postal)) + '</td>';
				                htmlData += '<td>' + (innerObj[6] || atob(innerObj.country)) + '</td>';
				                htmlData += '<td>' + (innerObj[7] || atob(innerObj.phone)) + '</td>';
				                htmlData += '<td>' + (innerObj[8] || atob(innerObj.fax)) + '</td>';
				                htmlData += '<td>' + (innerObj[9] || atob(innerObj.fn)) + '</td>';
				                htmlData += '<td>' + (innerObj[10] || atob(innerObj.ln)) + '</td>';
				                htmlData += '<td>' + (innerObj[11] || atob(innerObj.title)) + '</td>';
				                htmlData += '<td>' + (innerObj[12] || atob(innerObj.email)) + '</td>';
				                htmlData += '<td>' + (innerObj[13] || atob(innerObj.notes)) + '</td>';
				                htmlData += '<td>' + (innerObj[14] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'defects' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.defect_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'departments' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.dept_code)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.dept_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.manager_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'meeting_type' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.meeting_type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'parts' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.part_no)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.revision)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.alias)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'root_causes' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.type)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'sites' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.site)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.description)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;

		        		case 'suppliers' : (function () {
					        for (var j = 0; j < inputData.length; j++) {
					            var innerObj = inputData[j];
				                htmlData += htmlStart;
				                htmlData += '<td>' + (innerObj[0] || atob(innerObj.code_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[1] || atob(innerObj.company_name)) + '</td>';
				                htmlData += '<td>' + (innerObj[2] || atob(innerObj.billing_address)) + '</td>';
				                htmlData += '<td>' + (innerObj[3] || atob(innerObj.city)) + '</td>';
				                htmlData += '<td>' + (innerObj[4] || atob(innerObj.state)) + '</td>';
				                htmlData += '<td>' + (innerObj[5] || atob(innerObj.postal)) + '</td>';
				                htmlData += '<td>' + (innerObj[6] || atob(innerObj.country)) + '</td>';
				                htmlData += '<td>' + (innerObj[7] || atob(innerObj.phone)) + '</td>';
				                htmlData += '<td>' + (innerObj[8] || atob(innerObj.fax)) + '</td>';
				                htmlData += '<td>' + (innerObj[9] || atob(innerObj.fn)) + '</td>';
				                htmlData += '<td>' + (innerObj[10] || atob(innerObj.ln)) + '</td>';
				                htmlData += '<td>' + (innerObj[11] || atob(innerObj.title)) + '</td>';
				                htmlData += '<td>' + (innerObj[12] || atob(innerObj.email)) + '</td>';
				                htmlData += '<td>' + (innerObj[13] || atob(innerObj.notes)) + '</td>';
				                htmlData += '<td>' + (innerObj[14] || atob(innerObj.active)) + '</td>';
				                htmlData += htmlEnd;
					        }
			        	})();
		        		break;
			    	}
			    	break;
	    }
        if (htmlData !== '') htmlData += '</tr>';
        pageElement.append(htmlData);
    }
});