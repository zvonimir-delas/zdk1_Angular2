﻿angular.module('myApp').controller('newsListerController', function ($scope, localStorageHandlerService) {
    $scope.getNews = function () {
        $scope.currentNews = $scope.currentNews.concat(localStorageHandlerService.getNews($scope.newsCounter, 3));
        $scope.increaseNewsCounter();
    }
    $scope.newsCounter = 3;
    $scope.currentNews = localStorageHandlerService.getNews(0, 3);

    $scope.increaseNewsCounter = function () {
        $scope.newsCounter += 3;
    };

    $scope.manageFavorite = function (news) {
        news.isFavorited = !news.isFavorited;
        localStorageHandlerService.updateLocalStorage(news);
    };

    $scope.displayFavoriteStatus = function (news) {
        return news.isFavorited ? 'Remove from' : 'Add to';
    };

    $scope.searchNews = function () {
        var allNews = localStorageHandlerService.getNews();

        return !$scope.searchHome ? null : _.filter(allNews, function (n) { return _.includes(n.title, $scope.searchHome); });
    };
});