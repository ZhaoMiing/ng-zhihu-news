'use strict';

angular.module('myApp.list', ['ngRoute', 'myApp.list.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'components/list/template.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['listService', '$scope', function(listService, $scope) {
  listService.read({}, function (news) {
    $scope.news = news.query.results.json['stories'];
    $scope.date = news.query.results.json['date'];
  });
}]);