//MIT License

//Copyright (c) 2017 Everton José Beendicto

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
    .when('/', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Home', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/AboutUs', {
        templateUrl: 'Views/AboutUs.html',
        controller: 'AboutUsController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Rent', {
        templateUrl: 'Views/Rent.html',
        controller: 'RentController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Contact', {
        templateUrl: 'Views/Contact.html',
        controller: 'ContactController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/Login', {
        templateUrl: 'Views/Login.html',
        controller: 'LoginController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).when('/HttpTest', {
        templateUrl: 'Views/HttpTest.html',
        controller: 'HttpTestController',
        resolve: {
            init: function () {
                $(window).scrollTop(0);
            }
        }
    }).otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});