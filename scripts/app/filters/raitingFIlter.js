angular.module('myApp').filter('convertRaiting', function () {
    return function (ele) {
        return 'Raiting:' + ele <= 5 ? 'Bad' : ele >= 9 ? 'Excellent' : 'Not bad';
    }
});