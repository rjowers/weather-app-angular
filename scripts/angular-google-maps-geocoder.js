// var agmg = angular.module('angular-google-maps-geocoder', ['ui.bootstrap']);

// agmg.filter('trustAsHtml', ['$sce', function($sce){
//     return function(text) {
//         return $sce.trustAsHtml(text);
//     };
// }]);

// agmg.run(['$templateCache', function($templateCache) {
// 	'use strict';
// 	var template = "" +
//         "<a ng-bind-html='match.model.formatted_address | typeaheadHighlight:query | trustAsHtml'></a>";
//     $templateCache.put('angular-google-maps-geocoder-item.html', template);
    
// }]);

// agmg.run(['$templateCache', function($templateCache) {
// 	'use strict';
// 	var template = "" +
//         "<input type='text' ng-model='output'" +
//         "    placeholder='{{ placeholder }}'" +
//         "    typeahead-min-length='{{ minLength }}'" +
//         "    typeahead-wait-ms='{{ waitMs }}'" +
//         "    typeahead-template-url='angular-google-maps-geocoder-item.html'" +
//         "    typeahead-input-formatter='format(output)'" +
//         "    typeahead='address for address in getLocation($viewValue)'" +
//         "    typeahead-loading='loadingLocations' class='form-control'>";
//     $templateCache.put('angular-google-maps-geocoder.html', template);
    
// }]);

// var response = 0;


// agmg.service("geocoder", ["$q", function($q) {
//     var geocoder = new google.maps.Geocoder();
    
    
//     this.handle_reply = function getResults(defer, results, status) {
       
//         if(status == google.maps.GeocoderStatus.OK) {
//             defer.resolve(results);
//             // $scope.long = "Hello!";
//             // console.log(response);
//             // console.log(results[0].geometry.location.lat)
//            console.log(results[0].geometry.location.lng());            
//             return(results[0].geometry.location.lng());
//             response = getResults();
//             // console.log(response);            
            

            
//         //    var lng = results[0].geometry.location.lng();
//         //    return(lng);
//         //     console.log(lng);
            
//         } else if(status === google.maps.GeocoderStatus.ZERO_RESULTS) {
//             defer.resolve([]);
//         } else if(status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
//             defer.reject("Over query limit");
//         } else if(status === google.maps.GeocoderStatus.REQUEST_DENIED) {
//             defer.reject("Request denied");
//         } else {
//             defer.reject("Unknown error");
//         }
//     };
    
//     this.geocode_by_id = function(place_id) {
//         var self = this;
//         var defer = $q.defer();
        
//         geocoder.geocode({ placeId: place_id }, function(results, status) {
//             self.handle_reply(defer, results, status);
            
//         });
        
//         return defer.promise;
//     };
    
//     this.geocode_by_query = function(query) {
//         var self = this;
//         var defer = $q.defer();
        
//         geocoder.geocode({ address: query }, function(results, status) {
//             self.handle_reply(defer, results, status);
//             // console.log(results)
//         });
        
//         return defer.promise;
//     };

// }]);


// // agmg.controller('DemoCtrl', function($scope, geocoder) {
    
// //     $scope.my_place_id = "ChIJdd4hrwug2EcRmSrV3Vo6llI";
// //     // $scope.long = results[0].geometry.location.lng();
// //                 // console.log(results)
// //                 console.log(results);

// // });



// agmg.directive("angularGoogleMapsGeocoder", ["geocoder", function(geocoder) {
//     return {
//         restrict: 'AE',
        
//         scope: {
//             "placeid": '@',
//             "output": '=',
//             "placeholder": '@',
//             "minLength": '@',
//             "waitMs": '@'
//         },
        
//         templateUrl: 'angular-google-maps-geocoder.html',
        
//         link: function($scope, element, attrs) {
            
//             //Fetch the initial place_id data
//             if(attrs.placeid !== undefined) {
//                 geocoder.geocode_by_id(attrs.placeid).then(function(results) {
//                     if(results.length > 0) $scope.output = results[0];
//                 });
//             }
            
//             //Get places when the user types in the input field
//             $scope.getLocation = function(val) {
//                 return geocoder.geocode_by_query(val);
                
//             };
            
//             //Format the received data
//             $scope.format = function(val) {
//                 if(!angular.isObject(val) || !val.hasOwnProperty("formatted_address")) return;
//                 return val.formatted_address;
                
//             };
            
        
//         }
//     };
    
// }]);

// console.log(response);
