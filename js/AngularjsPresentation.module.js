angular.module('AngularjsPresentation', [
    'ngRoute',
]).config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'EmptyController',
                templateUrl: 'templates/title.html'
            })
            .when('/2', {
                templateUrl: 'templates/definitions.html'
            })
            .when('/3', {
                templateUrl: 'templates/new-app.html'
            })
            .when('/4', {
                templateUrl: 'templates/skeleton.html'
            })
            .when('/5', {
                templateUrl:  'templates/new-controller.html'
            })
            .when('/6', {
                templateUrl:  'templates/click-controller.html'
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
