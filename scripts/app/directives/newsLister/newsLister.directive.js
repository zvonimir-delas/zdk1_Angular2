angular.module('myApp').directive('newslister', function () {
    return {
        templateUrl: 'scripts/app/directives/newsLister/newsLister.template.html',
        controller: 'newsListerController'
    };
});