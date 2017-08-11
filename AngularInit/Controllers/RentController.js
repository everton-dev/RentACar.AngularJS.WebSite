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

app.controller('RentController', function ($scope, $rootScope) {
	$rootScope.title = 'Rent a Car AngularJS - Rent';
	$scope.msg = 'Choose a Car to Rent';
	$scope.showCars = false;
	$scope.filterSeach = { location:{ id:0, name: '-- Select --' }, Inidate:'', FinDate:'' };

	$scope.locations = [
						{ id:0, name: '-- Select --' },
						{ id:1, name: 'Brazil, São Paulo' },
						{ id:2, name: 'USA, New York' },
						{ id:3, name: 'UK, London' }
						];
	$scope.cars = [
					{ src:'Images/Cars/MercedesBenzGLASUV.png', brand:'Mercedes-Benz GLA', value:298.96, nowValue:284.51 },
					{ src:'Images/Cars/HyundaiAccent.png', brand:'Hyundai Accent', value:218.53, nowValue:208.14 },
					{ src:'Images/Cars/ToyotaYaris.png', brand:'Toyota Yaris', value:222.20, nowValue:211.60 },
					{ src:'Images/Cars/NissanSentra.png', brand:'Nissan Sentra', value:225.87, nowValue:215.08 },
					{ src:'Images/Cars/ToyotaCorolla.png', brand:'Toyota Corolla', value:229.52, nowValue:218.53 },
					{ src:'Images/Cars/ChevroletMalibu.png', brand:'Chevrolet Malibu', value:233.14, nowValue:222.01 }
					];

	$scope.Find = function(){
		$scope.showCars = true;
	};

	$scope.ReFind = function(){
		$scope.showCars = false;
	};
});