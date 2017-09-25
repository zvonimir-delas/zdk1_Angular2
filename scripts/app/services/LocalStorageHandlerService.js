angular.module('myApp').service('localStorageHandlerService', function (localStorageService, guidService) {

    this.onStartApp = function () {
        if (!localStorageService.get('news_ZD'))
            localStorageService.set('news_ZD', [{ id: guidService.new() }, { id: guidService.new() }, , { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }]);
    };

    this.getNNews = function () {
        //$scope.newsCounter = 6;
        var news = localStorageService.get('news_ZD');
        /*
        if (newsCounter >= news.length)
            return [{ id: "No more news" }];

        // delete everything starting from index of newsCounter (newsCounter index included)
        news.splice(newsCounter);

        newsCounter *= newsCounter;*/

        return news;
    }
});