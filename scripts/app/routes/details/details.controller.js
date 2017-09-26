angular.module('myApp').controller('detailsController', function ($scope, $stateParams, localStorageHandlerService) {

    $scope.news = localStorageHandlerService.getNewsById($stateParams.newsId);

    $scope.manageFavorite = function (news) {
        news.isFavorited = !news.isFavorited;
        localStorageHandlerService.updateLocalStorage(news);
    };

    $scope.displayFavoriteStatus = function (news) {
        return news.isFavorited ? 'Remove from' : 'Add to';
    };
});