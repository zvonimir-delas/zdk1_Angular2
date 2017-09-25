angular.module('myApp').service('localStorageHandlerService', function (localStorageService, guidService) {

    this.onStartApp = function () {
        if (!localStorageService.get('news_ZD'))
            localStorageService.set('news_ZD', [{ id: guidService.new() }, { id: guidService.new() }, , { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }, { id: guidService.new() }]);
    };

    this.getNews = function () {
        return news = localStorageService.get('news_ZD');
    }
});