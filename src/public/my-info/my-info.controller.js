(function () {
'use strict'

angular.module("public")
.controller("infoController", infoController)
infoController.$inject = ['MenuService'];
function infoController(MenuService) {
var ctrl = this;

ctrl.saved= MenuService.isSaved();
ctrl.user= MenuService.getUser();
var promise = MenuService.getItemSaved(ctrl.user.item);
promise.then(function(response){
ctrl.item=response;
})

}

})();
