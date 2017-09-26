angular.module('myApp').directive('commentlister', function () {
    return {
        templateUrl: 'scripts/app/directives/commentsLister/commentLister.template.html',
        controller: 'commentListerController',
        scope: {
            comments: '=',
            limitcommentnumber: '='
        }
    };
});