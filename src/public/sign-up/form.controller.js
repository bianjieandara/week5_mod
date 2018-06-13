(function () {
'use strict'

angular.module("public")
.controller("SignController", SignController)
SignController.$inject = ['MenuService'];
function SignController(MenuService) {
var ctrl = this;

ctrl.findItem = function () {
  var short_name = ctrl.user.menuitem;
  short_name = short_name.toUpperCase();
  var fname = ctrl.user.fname;
  var lname = ctrl.user.lname;
  var tlf = ctrl.user.tlf;
  var email = ctrl.user.email;
ctrl.myItem= MenuService.getItem(short_name,fname,lname,tlf,email);

};



}

})();
