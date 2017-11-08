angular.module('angularjsPresentation', [
    'ngRoute',
]).config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'EmptyController',
                controllerAs: 'ctrl',
                templateUrl: 'templates/title.html'
            });

    }
).controller('SlidesController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.total_slides = 10;

    $scope.$on('$routeChangeSuccess', function($event, next, current) {
        if (next) {
            $scope.slide_num = next.$$route.originalPath.substr(1) || '1';
        }
    });
}]);
