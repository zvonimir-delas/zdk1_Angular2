angular.module('myApp').directive('commentLister', function () {
    return {
        templateUrl: 'scripts/app/directives/newsLister/commentsLister.template.html',
        controller: 'commentsListerController'
    };
});