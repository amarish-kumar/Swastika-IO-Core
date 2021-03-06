﻿'use strict';
app.factory('AppSettingsServices', ['$http', '$rootScope', 'commonServices', function ($http, $rootScope, commonServices) {

    //var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';

    var appSettingssServiceFactory = {};

    var settings = $rootScope.settings

    var _getAppSettings = async function () {
        var url = '/api/portal/app-settings/details';
        
        var req = {
            method: 'GET',
            url: url
        };
        return await commonServices.getApiResult(req)
    };

    var _saveAppSettings = async function (appSettings) {
        var apiUrl = '/api/portal/app-settings/save';
        var req = {
            method: 'POST',
            url: apiUrl,
            data: JSON.stringify(appSettings)
        };
        return await commonServices.getApiResult(req)
    };

    appSettingssServiceFactory.getAppSettings = _getAppSettings;
    appSettingssServiceFactory.saveAppSettings = _saveAppSettings;
    return appSettingssServiceFactory;

}]);
