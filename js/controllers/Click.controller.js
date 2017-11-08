angular.module('AngularjsPresentation').controller('ClickController', [function () {
    var vm = this;
    vm.myVariable = 'Hi!';
    vm.setGoodMorning = function () {
        vm.myVariable = 'Good Morning!'
    };
}]);
