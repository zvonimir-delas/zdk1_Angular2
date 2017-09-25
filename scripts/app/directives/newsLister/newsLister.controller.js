angular.module('myApp').controller('newsListerController', function (localStorageHandlerService, $scope) {
    $scope.getNews = localStorageHandlerService.getNNews();
    $scope.newsCounter = 6;
    $scope.incNewsCounter = function () {
        $scope.newsCounter += 6;
    };
});