var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $http.get('/api.htm')
        .success(function (result) {
        
        $scope.rules = result;
        console.log(result);
        
        
    })
        .error(function (data, status) {
        
        console.log(data);
    });
    
    $scope.newRule = '';
    $scope.addRule = function () {
        
        $http.post('/api.htm', {newRule: $scope.newRule})
            .success(function (result) {
                $scope.rules = result;
                $scope.newRule = '';
        })
            .error(function (data, status) {
            
                console.log(data);
        });
    };
   
    
}]);
