angular.module('myApp').config(function ($stateProvider) {
    $stateProvider
        .state('details', {
            url: '/details/:newsId/',
            controller: 'detailsController',
            templateUrl: 'scripts/app/routes/details/details.template.html',
            params: {
                newsId: null
            }
        });
});