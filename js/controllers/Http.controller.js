angular.module('AngularjsPresentation').controller('HttpController',
    ['$scope', '$http', function ($scope, $http) {

    $http.get('/').then(
        function (response) {
            // success
        },
        function (errorResponse) {
            // failure
        }
    );
}]);
