
var api_key = config.key;

var lat;
var app = angular.module('myapp', []);

console.log(moment('4/30/2016', 'MM/DD/YYYY').add(1, 'day'))


// app.controller("getDataCtrl", function getWeather($scope, $http, $rootScope){
    
//     $http.get("https://api.darksky.net/forecast/" + api_key + "/37.8267,-122.4233")
//     .then(function(response){
//         console.log(response);
//         $scope.currenttemp = response.data.currently.temperature;
//         $scope.currentlocation = response.data.latitude;        
//         $scope.currentsky = response.data.currently.summary;
//         console.log(lat)
//         console.log($rootScope.name);
        
        
//     });
//     // $scope.hello = "test";
//     // $scope.todotext = '';
 
    
// });

app.controller('myController', function getLocation($scope, $rootScope, $http) {
    
    var components = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
      types: ['geocode']
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      $scope.$evalAsync(fillInAddress);
    });
    
    $scope.formData = {};
    $scope.ll = {};
    
    function fillInAddress() {
      var place = autocomplete.getPlace();
      Object.keys(components).forEach(function(component) {
        $scope.formData[component] = '';
        document.getElementById(component).disabled = false;
      });
      
      place.address_components.forEach(function(component) {
        var addressType = component.types[0];
        if (components[addressType]) {
          $scope.formData[addressType] = component[components[addressType]];
        }
      });
      $scope.ll = {
        lat: place.geometry.location.lat,
        lon: place.geometry.location.lng      
      }; 

    //   $rootScope.name = "Ryan";
    //   console.log($rootScope.name);
      console.log(place)
      var lng = (place.geometry.location.lng());   
      
           
      var lat = (place.geometry.location.lat()); 
    
    

    //   $http.jsonp('some/trusted/url', {jsonpCallbackParam: 'callback'})
        


    // $http.get("https://api.darksky.net/forecast/" + api_key + "/" + lat + ", " + lng)
    $http({
        method: 'JSONP',
        url: "https://api.darksky.net/forecast/" + api_key + "/" + lat + ", " + lng + "?callback=JSON_CALLBACK",
        params: {
            format: 'jsonp',
            json_callback: 'JSON_CALLBACK'
        }
    })
    .then(function(response){
        
        console.log(response);
        $scope.currenttemp = Math.round(response.data.currently.temperature) + "°";
        $scope.currentlocation = place.vicinity;        
        // $scope.currentsky = response.data.currently.summary;
        // Math.round(2.5)

                function getCurrentweather() {
                        console.log(response.data.currently.summary);

            if (response.data.currently.summary === "Partly Cloudy") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },

                ];
                
              }
              if (response.data.currently.summary === "Rain") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.currently.summary=== "Clear") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.currently.summary === "Snow") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }
              if (response.data.currently.summary === "Foggy") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              if (response.data.currently.summary === "Mostly Cloudy") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
        
        if (response.data.currently.summary === "Overcast") {
            $scope.currentsky = [
                {
                    image: '../assets/weather-animations/cloudy.svg',
                },

            ];
          }
    }
        

        getCurrentweather();


        //Daily Scope
        $scope.day1 = moment().add(1, 'days').format("dddd")
        $scope.day2 = moment().add(2, 'days').format("dddd")
        $scope.day3 = moment().add(3, 'days').format("dddd")
        $scope.day4 = moment().add(4, 'days').format("dddd")
        $scope.day5 = moment().add(5, 'days').format("dddd")
        $scope.day6 = moment().add(6, 'days').format("dddd")
        
        // console.log(moment().add(1, 'days'))
        // $scope.day = response.data.daily.data[1].time ;
        // $scope.weather1 = response.data.daily.data[1].icon ;

        function getPic1() {
                        console.log(response.data.daily.data[1].icon);

            if (response.data.daily.data[1].icon === "partly-cloudy-day") {
                $scope.weatherOne = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },

                ];
                
              }
              if (response.data.daily.data[1].icon === "rain") {
                $scope.weatherOne = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.daily.data[1].icon === "clear-day") {
                $scope.weatherOne = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.daily.data[1].icon === "snow") {
                $scope.weatherOne = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }

              if (response.data.currently.summary === "fog") {
                $scope.currentsky = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              

        }

        getPic1();
        // $scope.weather1 = function(){
        //     console.log(response.data.daily.data[1].icon);
            
        //                 if (response.data.daily.data[1].icon == "partly-cloudy-day") {
        //                     $scope.weather1 = [
        //                         {
        //                             image1: '../assets/weather-animations/cloudy-day-1.svg',
        //                         },
            
        //                     ];
        //                   }
        // }

        
        function getPic2() {
                        console.log(response.data.daily.data[2].icon);

            if (response.data.daily.data[2].icon === "partly-cloudy-day") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },
                
                ];
                
              }
              if (response.data.daily.data[2].icon === "rain") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.daily.data[2].icon === "clear-day") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.daily.data[2].icon === "snow") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }

              if (response.data.daily.data[2].icon === "fog") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              if (response.data.daily.data[2].icon === "partly-cloudy-night") {
                $scope.weatherTwo = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              console.log($scope.weatherTwo);

        }

        getPic2();


                        function getPic3() {
                            console.log(response.data.daily.data[3].icon);

                if (response.data.daily.data[3].icon === "partly-cloudy-day") {
                    $scope.weatherThree = [
                        {
                            image: '../assets/weather-animations/cloudy-day-1.svg',
                        },
                    
                    ];
                    
                }
                if (response.data.daily.data[3].icon === "rain") {
                    $scope.weatherThree = [
                        {
                            image: '../assets/weather-animations/rainy-5.svg',
                        },

                    ];
                }
                if (response.data.daily.data[3].icon === "clear-day") {
                    $scope.weatherThree = [
                        {
                            image: '../assets/weather-animations/day.svg',
                        },

                    ];
                }
                if (response.data.daily.data[3].icon === "fog") {
                    $scope.weatherThree = [
                        {
                            image: '../assets/weather-animations/cloudy.svg',
                        },

                    ];
                }
                if (response.data.daily.data[3].icon === "partly-cloudy-night") {
                    $scope.weatherThree = [
                        {
                            image: '../assets/weather-animations/day.svg',
                        },
    
                    ];
                  }

                console.log($scope.weatherThree);

                }

                getPic3();


               function getPic4() {
                        console.log(response.data.daily.data[4].icon);

            if (response.data.daily.data[4].icon === "partly-cloudy-day") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },
                
                ];
                
              }
              if (response.data.daily.data[4].icon === "rain") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.daily.data[4].icon === "clear-day") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.daily.data[4].icon === "snow") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }
              if (response.data.daily.data[4].icon === "fog") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              if (response.data.daily.data[4].icon === "partly-cloudy-night") {
                $scope.weatherFour = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }

              console.log($scope.weatherFour);

        }

        getPic4();


        
        function getPic5() {
                        console.log(response.data.daily.data[5].icon);

            if (response.data.daily.data[5].icon === "partly-cloudy-day") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },
                
                ];
                
              }
              if (response.data.daily.data[5].icon === "rain") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.daily.data[5].icon === "clear-day") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.daily.data[5].icon === "snow") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }
              if (response.data.daily.data[5].icon === "fog") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              if (response.data.daily.data[5].icon === "partly-cloudy-night") {
                $scope.weatherFive = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              console.log($scope.weatherFive);

        }

        getPic5();   
        
                function getPic6() {
                        console.log(response.data.daily.data[6].icon);

            if (response.data.daily.data[6].icon === "partly-cloudy-day") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/cloudy-day-1.svg',
                    },
                
                ];
                
              }
              if (response.data.daily.data[6].icon === "rain") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/rainy-5.svg',
                    },

                ];
              }
              if (response.data.daily.data[6].icon === "clear-day") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              if (response.data.daily.data[6].icon === "snow") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/snowy-6.svg',
                    },

                ];
              }
              if (response.data.daily.data[6].icon === "fog") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/cloudy.svg',
                    },

                ];
              }
              if (response.data.daily.data[6].icon === "partly-cloudy-night") {
                $scope.weatherSix = [
                    {
                        image: '../assets/weather-animations/day.svg',
                    },

                ];
              }
              console.log($scope.weatherSix);

        }

        getPic6();     


        // $scope.weather1 = function getPic() { 
        //     console.log(response.data.daily.data[1].icon);

        //     if (response.data.daily.data[1].icon == "partly-cloudy-day" ) {
        //         // document.getElementById('image').style.backgroundImage = "url(" + path + ")";   // setting it as background image of div
        //         src: '../assets/weather-animations/cloudy-day-1.svg'                
        //         console.log("yes");
        //     }else{
        //         console.log("no");
        //     }
        // }

        $scope.high1 =Math.round(response.data.daily.data[1].apparentTemperatureHigh) + "°" ;
        // $scope.degree = "°";
        $scope.low1 = Math.round(response.data.daily.data[1].apparentTemperatureLow) + "°"  ;
        
        $scope.weather2 = response.data.daily.data[2].icon ;
        $scope.high2 = Math.round(response.data.daily.data[2].apparentTemperatureHigh) + "°"  ;
        $scope.low2 = Math.round(response.data.daily.data[2].apparentTemperatureLow) + "°"  ;

        $scope.weather3 = response.data.daily.data[3].icon;
        $scope.high3 = Math.round(response.data.daily.data[3].apparentTemperatureHigh) + "°"  ;
        $scope.low3= Math.round(response.data.daily.data[3].apparentTemperatureLow) + "°"  ;

        $scope.weather4 = response.data.daily.data[4].icon ;
        $scope.high4 = Math.round(response.data.daily.data[4].apparentTemperatureHigh) + "°"  ;
        $scope.low4 = Math.round(response.data.daily.data[4].apparentTemperatureLow) + "°"  ;

        $scope.weather5 = response.data.daily.data[5].icon ;
        $scope.high5 = Math.round(response.data.daily.data[5].apparentTemperatureHigh) + "°"  ;
        $scope.low5 = Math.round(response.data.daily.data[5].apparentTemperatureLow) + "°"  ;

        $scope.weather6 = response.data.daily.data[6].icon ;
        $scope.high6 = Math.round(response.data.daily.data[6].apparentTemperatureHigh) + "°"  ;
        $scope.low6 = Math.round(response.data.daily.data[6].apparentTemperatureLow) + "°"  ;

        $scope.weather7 = response.data.daily.data[7].icon ;
        $scope.high7 = Math.round(response.data.daily.data[7].apparentTemperatureHigh) + "°"  ;
        $scope.low7 = Math.round(response.data.daily.data[7].apparentTemperatureLow) + "°"  ;
        
        // $Scope.weather = ;
        // $Scope.hilo = ;

        console.log(lat)
        // console.log($rootScope.name);
        
        // var x = 'ABC XYZ PQRS';
        
        // var y = x.split(' ').slice(0,1).join();
        
        
        // console.log(y);
        // function showCurrent(){
        //     if ($scope.currenttemp === $scope.currenttemp) {
        //         return true;
        //         console.log("true");
        //     }else{
        //         return false;
        //         console.log("false");
        //     }
        
        //   }
        
        //   showCurrent();
    });

    }
    


  });




  

// app.controller('DemoCtrl', function($scope, geocoder) {
    
//     $scope.my_place_id = "ChIJdd4hrwug2EcRmSrV3Vo6llI";
//     // $scope.long = results[0].geometry.location.lng();
//                 // console.log(results)
//                 console.log(agmg);
//                 console.log(response);
//                 // console.log(results[0].geometry.location.lng());            
                
                

// });

// console.clear();

// var app = angular.module('demo', ['angular-google-maps-geocoder']);

// app.controller('DemoCtrl', function($scope, geocoder) {
    
//     $scope.my_place_id = "ChIJdd4hrwug2EcRmSrV3Vo6llI";

// });



// var myApp = angular.module('app', []);

// app.controller('myController', function($scope) {
//   var components = {
//     street_number: 'short_name',
//     route: 'long_name',
//     locality: 'long_name',
//     administrative_area_level_1: 'short_name',
//     country: 'long_name',
//     postal_code: 'short_name'
//   };
//   var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
//     types: ['geocode']
//   });
//   google.maps.event.addListener(autocomplete, 'place_changed', function() {
//     $scope.$evalAsync(fillInAddress);
//   });
  
//   $scope.formData = {};
//   $scope.ll = {};
  
//   function fillInAddress() {
//     var place = autocomplete.getPlace();
//     Object.keys(components).forEach(function(component) {
//       $scope.formData[component] = '';
//       document.getElementById(component).disabled = false;
//     });
    
//     place.address_components.forEach(function(component) {
//       var addressType = component.types[0];
//       if (components[addressType]) {
//         $scope.formData[addressType] = component[components[addressType]];
//       }
//     });
//     $scope.ll = {
//       lat: place.geometry.location.lat,
//       lon: place.geometry.location.lng      
//     }; 
//     console.log(place)
//     var lng = (place.geometry.location.lng());    
//     console.log(lng);        
//     var lat = (place.geometry.location.lat());    
//     console.log(lat);  

//     console.log($scope.ll)    
//   }
  
// });








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