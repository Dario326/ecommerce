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
    
    $scope.add = function(name, color, price){
        
        $scope.add = appSrv.newProduct({name: name, description: color, price: price})
        $scope.name = " ";
        $scope.color = " ";
        $scope.price = " ";
    }
})
