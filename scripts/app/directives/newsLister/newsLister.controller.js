angular.module('myApp').controller('newsListerController', function (localStorageHandlerService, $scope) {
    $scope.getNews = localStorageHandlerService.getNews();
    $scope.newsCounter = 6;

    $scope.increaseNewsCounter = function () {
        $scope.newsCounter += 6;
    };
});