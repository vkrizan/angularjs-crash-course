angular.module('AngularjsPresentation').component('shinyShield', {
    templateUrl: 'templates/ShinyShield.html',
    transclude: true,
    bindings: {
        name: '<'  // '=' for two-way; '&' for callback
    }
});

