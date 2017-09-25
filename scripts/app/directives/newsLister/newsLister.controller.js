angular.module('myApp').controller('newsListerController', function ($scope, localStorageHandlerService) {
    $scope.getNews = localStorageHandlerService.getNews();
    $scope.newsCounter = 6;

    $scope.increaseNewsCounter = function () {
        $scope.newsCounter += 6;
    };

    $scope.manageFavorite = function (news){
        news.isFavorited = !(news.isFavorited);
        localStorageHandlerService.updateLocalStorage(news);
    };

    $scope.displayFavoriteStatus = function (news) {
        return news.isFavorited ? 'Remove from' : 'Add to';
    }
});