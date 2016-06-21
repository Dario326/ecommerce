angular.module("MyApp").controller("appCtrl", function($scope, appSrv){
   
    $scope.getproducts = function(){
        appSrv.getData()
            .then(function(response){
            $scope.products = response.data;
        })
    }    
    $scope.getproducts();
    
    $scope.delete = function(id){
      $scope.delete = appSrv.delete(id);
    }
    
    $scope.add = function(name, color){
        
        $scope.add = appSrv.newProduct({title: name, color: color})
    }
})
