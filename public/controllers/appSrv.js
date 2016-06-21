angular.module("MyApp").factory("appSrv", function($http){
    
    return {
        getData(){
			return $http.get( `/api/products` );
		},
        delete(id){
            return $http.delete(`./api/products/${id}`);
        },
        newProduct(obj){
            return $http.post(`./api/products`, obj)
        }
    }
    
    
})