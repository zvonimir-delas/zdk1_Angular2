angular.module('myApp').directive('lister', function () {
    return {
        templateUrl: 'scripts/app/directives/newsLister/newsLister.template.html',
        controller: 'newsListerController'
    };
});