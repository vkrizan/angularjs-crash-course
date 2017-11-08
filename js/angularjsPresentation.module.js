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
).controller('SlidesController', ['$rootScope', function($rootScope) {
    $rootScope.total_slides = 10;
}]);
