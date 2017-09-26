angular.module('myApp').config(function ($stateProvider) {
    $stateProvider
        .state('favorite', {
            url: '/favorite',
            controller: 'newsListerController',
            templateUrl: 'scripts/app/routes/favorite/favorite.template.html'
        });
});