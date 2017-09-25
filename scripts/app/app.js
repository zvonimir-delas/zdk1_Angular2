var app = angular.module('myApp', ['LocalStorageModule', 'ui.router']);

app.run(function (localStorageHandlerService) {
    localStorageHandlerService.onStartApp();
});