﻿//MIT License

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

app.controller('HttpTestController', function ($scope, $rootScope, APIService) {
	$rootScope.title = 'Rent a Car AngularJS - Http Test';
	$scope.msg = 'Http Test';
	$scope.returnTest = {};
	$scope.showResult = false;
	$scope.cep = '02611003';

	$scope.CallTest = function(){
		var serviceReturn = APIService.getTest();
        serviceReturn.then(function (d) {
            $scope.returnTest = d.data;
        }, function (error) {
			$scope.returnTest = error;
        });
		$scope.showResult = true;
	}

	$scope.CallCep = function(){
		var serviceReturn = APIService.getCep($scope.cep);
        serviceReturn.then(function (response) {
			$scope.returnTest = response.data;
        }, function (response) {
			$scope.returnTest = response.data;
        });
		$scope.showResult = true;
	}
});