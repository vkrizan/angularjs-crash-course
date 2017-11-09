angular.module('AngularjsPresentation').controller('ObjectListController', ['$scope', function ($scope) {
    $scope.items = [
        {city: 'New York', country: 'USA'},
        {city: 'Tokyo', country: 'Japan'},
        {city: 'Brisbane', country: 'Australia'}
    ];
}]);
