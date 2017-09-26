angular.module('myApp').service('localStorageHandlerService', function (localStorageService, guidService) {

    this.onStartApp = function () {
        if (!localStorageService.get('news_ZD'))
            localStorageService.set('news_ZD', [{ id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }, { id: guidService.new(), isFavorited: false }]);
    };

    this.getNews = function () {
        return localStorageService.get('news_ZD');
    };

    this.updateLocalStorage = function (news) {
        var oldNews = this.getNews();
        oldNews.forEach(function (n) {
            n.isFavorited = (n.id === news.id) ? news.isFavorited : n.isFavorited;
        });

        var updatedNews = oldNews;

        localStorageService.set('news_ZD', updatedNews);
    };
});