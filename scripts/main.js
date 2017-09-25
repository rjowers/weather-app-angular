

var app = angular.module('myapp', []);


app.controller("testCtrl", function($scope, $http){
    
    $http.get("https://api.darksky.net/forecast/" + api_key + "/37.8267,-122.4233")
    .then(function(response){
        console.log(response);

    });
    // $scope.hello = "test";
    // $scope.todotext = '';

    
});

// .then(function(response) {
//     $scope.content = response.data;
//     $scope.statuscode = response.status;
//     $scope.statustext = response.statusText;            
// });


// $scope.addTodo = function(){
//     $scope.todo.push({todoText:$scope.input, done:false});
//     $scope.input="";
// }


// $scope.remove = function() {
    // var oldList = $scope.todo;
    // $scope.todo = [];
    // angular.forEach(oldList, function(todos) {
    //     if (!todos.done) $scope.todo.push(todos);
    // });
// };