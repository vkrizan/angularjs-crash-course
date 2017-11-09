angular.module('AngularjsPresentation', [
    'ngRoute'
]).config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                redirectTo: '/1'
            })
            .when('/1', {
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
            })
            .when('/7', {
                templateUrl:  'templates/models-ifs.html'
            })
            .when('/8', {
                templateUrl:  'templates/scope-classes.html'
            })
            .when('/9', {
                templateUrl:  'templates/repeat.html'
            })
            .when('/10', {
                templateUrl:  'templates/ordering.html'
            })
            .when('/11', {
                templateUrl:  'templates/filter.html'
            })
            .when('/12', {
                templateUrl:  'templates/http.html'
            })
            .when('/13', {
                templateUrl:  'templates/component.html'
            })
            .when('/14', {
                templateUrl:  'templates/directives.html'
            })
            .when('/15', {
                templateUrl:  'templates/questions.html'
            })
            .when('/16', {
                templateUrl:  'templates/end.html'
            });

    }
).controller('SlidesController', ['$rootScope', '$scope', '$location', '$timeout', '$window', function($rootScope, $scope, $location, $timeout, $window) {
    $rootScope.total_slides = 16;

    $scope.$on('$routeChangeSuccess', function($event, next, current) {
        if (next) {
            $scope.slide_num = next.$$route.originalPath.substr(1) || '1';
        }
    });

    $window.onkeydown = function (event) {
        if(event.which === 37 || event.which === 39) {
            var currentSlide = parseInt($location.path().substr(1) || '1');
            var newSlide;
            if (event.which === 37) {
                newSlide = currentSlide -1;
            } else {
                newSlide = currentSlide +1;
            }

            if (newSlide < 1 || newSlide > $rootScope.total_slides) {
                return
            }

            $timeout(function () {
                $location.path("/" + newSlide);
            });
        }
    };

}]);
