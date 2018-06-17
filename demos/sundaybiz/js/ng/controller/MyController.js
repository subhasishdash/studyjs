app.controller("myCtrl", function($scope, $compile, $sce, $http, 
    rendererService, counterService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.isAmending = false;
    $scope.leftPanel = [
        //, 'SWOT Analysis', 'Reports',
    	{ name : 'FMEA', submenu : ['FMEA', 'Setup'], menu_name : 'fmea'},
    	{ name : 'Asset Tracking Database', submenu : ['Setup'], menu_name : 'asset_tracking'},
    	{ name : 'Ground Control', submenu : ['Setup'], menu_name : 'ground_control'},
    	{ name : 'Q-Med Database', submenu : ['Setup'], menu_name : 'q_med'},
        { name : 'Quality Database', submenu : ['Setup'], menu_name : 'quality'},
        { name : 'SPC Keeper', submenu : ['Setup'], menu_name : 'spc_keeper'},
        { name : 'T-Med Database', submenu : ['Setup'], menu_name : 't_med'},
    	{ name : 'Training Database', submenu : ['Setup'], menu_name : 'training'},
        { name : 'Vendor Management Database', submenu : ['Setup'], menu_name : 'vendor_mgmt'}
    ];

    $scope.moduleName = 'fmea';
    $scope.currentPage = 'fmea';

    $scope.templateUrl = function () {
        return '/js/ng/templates/' + $scope.moduleName + '/' + $scope.currentPage + '.html';
    };

    $scope.updateDashboard = function (pageID, menu) {
        $scope.moduleName = menu;
        $scope.currentPage = pageID;
        setTimeout (function () {
            if (pageID === 'Setup' && menu === 'fmea')
            $scope.retrieveData('severity_rating', menu);
            else if (pageID === 'Setup' && menu === 'asset_tracking')
                $scope.retrieveData('asset_categories', menu);
            else if (pageID === 'Setup' && menu === 'ground_control')
                $scope.retrieveData('class_types', menu);
            else if (pageID === 'Setup' && menu === 'q_med')
                $scope.retrieveData('disposition', menu);
            else if (pageID === 'Setup' && menu === 'quality')
                $scope.retrieveData('audit_types', menu);
            else if (pageID === 'Setup' && menu === 'training')
                $scope.retrieveData('class_types', menu);
            else if (pageID === 'Setup' && menu === 'vendor_mgmt')
                $scope.retrieveData('carriers', menu);
        }, 500);
    };

    $scope.addNewColumn = function (type, menu) {
        var count = counterService.getCount(menu, type);
        var pageElement;
        var htmlData = '<tr><td><input type="checkbox"/></td>';
        for (var i = 0; i < count ; i++) {
            htmlData += '<td><input type="text"/></td>';
        }
        htmlData += '</tr>';
        pageElement = angular.element(document.getElementById(type));
        pageElement.append(htmlData);
    };

    var searchData = function (menu, setup_type, indexesToIgnore) {
        var existingData = [], $el = $('tbody#'+setup_type+' tr').find('td').not(':has(*)');
        var k = 0;
        var count = counterService.getCount(menu, setup_type);
        for (var i = 0; i < $el.length;) {
            if (indexesToIgnore.indexOf(k++) === -1) {
                var _ar = [];
                for (var j = i; j < i + count; j++) {
                    var _txt = $el[j].textContent;
                    _ar.push(_txt === '' ? ' ' : _txt);
                }
                existingData.push(_ar);
            }
            i += count;
        }

        var newData = [], $el = $('tbody#'+setup_type+' tr').find('input').not(':input[type=checkbox]');
        for (var i = 0; i < $el.length;) {
            if (indexesToIgnore.indexOf(k++) === -1) {
                var _ar = [], dataAvailable;
                for (var j = i; j < i + count; j++) {
                    var _elVal = $el[j].value;
                    if (_elVal !== '') {
                        dataAvailable = true;
                    }
                    var _txt = $el[j].value;
                    _ar.push(_txt === '' ? ' ' : _txt);
                }
                //if atleast one row is filled in the whole column
                if (dataAvailable)
                    newData.push(_ar);
            }
            i += count;
        }
        return existingData.concat(newData);
    }

    $scope.saveColumn = function (setup_type, setup_menu, indexesToIgnore) {
        if (!setup_type) return;
        if (!indexesToIgnore) {
            indexesToIgnore = [];
        }
        var data = searchData(setup_menu, setup_type, indexesToIgnore);
        var req = {
         method: 'POST',
         url: './setup/',
         headers: {
           'Content-Type': 'application/json'
         },
         data: { setup_type : setup_type, setup_menu : setup_menu, setup_data : btoa(JSON.stringify(data)) }
        }
        $http(req).then(function() {
            rendererService.fillSetupDOM(data, setup_type, setup_menu);
            $scope.isAmending = true;
        }, function(){
            console.log('failure');
        });
    };

    $scope.retrieveCompanyInfo = function (menu) {
        var req = {
         method: 'POST',
         url: './retrieveCompanyInfo/',
         headers: {
           'Content-Type': 'application/json'
         },
         data: {setup_menu : menu }
        }
        $http(req).then(function(data){
            $scope.company = JSON.parse(atob(data.data[0][menu]));
        }, function(){
            console.log('Failed to retrieveCompanyInfo');
        });
    };

    $scope.updateCompanyInfo = function (type, menu) {
        var req = {
         method: 'POST',
         url: './saveCompanyInfo/',
         headers: {
           'Content-Type': 'application/json'
         },
         data: { setup_type : type, setup_menu : menu, data : btoa(JSON.stringify($scope.company)) }
        }
        $http(req).then(function(data){
            alert('Updated Successfully');
        }, function(){
            alert('Failed to update');
        });

    };

    $scope.retrieveData = function (setup_type, setup_menu) {
        if (!setup_type) return;
        var req = {
         method: 'POST',
         url: './retrieval/',
         headers: {
           'Content-Type': 'application/json'
         },
         data: { setup_type : setup_type, setup_menu : setup_menu }
        }
        $http(req).then(function(data){
            rendererService.fillSetupDOM(data, setup_type, setup_menu);
            //allow amending
            $scope.isAmending = true;
        }, function(){
            console.log('failure');
        });
    };

    $scope.removeItem = function (item_type, setup_menu) {
        var selectedItems = $('tbody#'+item_type+' tr').find('input').not(':input[type=text]');
        var _indexes = [];
        for (var i in selectedItems) {
            var item = selectedItems[i];
            if (item.checked) {
                //item marked for deletion
                _indexes.push(Number(i));
            }
        }
        $scope.saveColumn(item_type, setup_menu, _indexes);
    };

    $scope.amendColumn = function (item_type, setup_menu) {
        var selectedItems = $('tbody#'+item_type+' tr').find('input').not(':input[type=text]');
        var _indexes = [];
        for (var i in selectedItems) {
            var item = selectedItems[i];
            if (item.checked) {
                //item marked for amending
                _indexes.push(Number(i));
            }
        }
        var inputData = searchData(setup_menu, item_type, []);
        var pageElement = angular.element(document.getElementById(item_type));
        pageElement.html('');
        for (var j = 0; j < inputData.length; j++) {
            var innerArr = inputData[j];
            htmlData = '<tr><td><input type="checkbox"/></td>';
            for (var i = 0 ; i < innerArr.length; i++) {
                //if (item_type === 'severity_rating') {
                    if (_indexes.indexOf(j) === -1) {
                        htmlData += '<td>' + innerArr[i] + '</td>';
                    } else {
                        htmlData += '<td><input type="text" value="' + innerArr[i] + '" /></td>';
                    }
                //}
            }
            htmlData += '</tr>';
            pageElement.append(htmlData);
        }
        $scope.isAmending = false;
    }
});