(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
service.info=false;

service.isSaved = function () {
return  service.info
}
  service.user= {};
  service.getItem = function (menuItem,fname,lname,tlf,email) {
    return $http.get(ApiPath + '/menu_items/'+menuItem+'.json').then(function (response) {
      service.user.firstname = fname;
      service.user.lastname = lname;
      service.user.tlf = tlf;
      service.user.email = email;
      service.user.item = menuItem;
      service.info=true;
      return response.data;
    }).catch(function (error) {
      return "error";
    });
  }

  service.getItemSaved = function (item) {
    return $http.get(ApiPath + '/menu_items/'+item+'.json').then(function (response) {
      return response.data;
    }).catch(function (error) {
      return "error";
    });
  }

  service.getUser = function () {
    return service.user;
  }

}



})();
