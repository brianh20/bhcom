var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider){
	//$urlRouteProvider.otherwise('');

	var contact = {
		name: 'contact',
		url: '/contact',
		templateUrl : '/app/pages/contact.html'
	}

	var gallery = {
		name: 'gallery',
		url: '/gallery',
		templateUrl : '/app/pages/gallery.html'
	}

	var home = {
		name: 'home',
		url: '',
		templateUrl : '/app/pages/home.html'
	}
	var home_alt = {
		name: 'home_alt',
		url: '#/',
		templateUrl : '/app/pages/home.html'
	}

	var services = {
		name: 'services',
		url: '/services',
		templateUrl : '/app/pages/services.html'
	}

	$stateProvider.state(contact);
	$stateProvider.state(gallery);
	$stateProvider.state(home);
	$stateProvider.state(home_alt);
	$stateProvider.state(services);
	
});

app.directive('siteheader', function(){
  return{
    templateUrl : '/app/widgets/siteheader.html'
  };
});

app.directive('sitefooter', function(){
  return{
    templateUrl : '/app/widgets/sitefooter.html'
  };
});

app.directive('navbar', function(){
  return{
    templateUrl : '/app/widgets/navbar.html'
  };
});

app.directive('projects', function(){
  return{
    templateUrl : '/app/widgets/projects.html'
  };
});

app.directive('servicelist', function(){
  return{
    templateUrl : '/app/widgets/servicelist.html'
  };
});

app.directive('home', function(){
  return{
    templateUrl : '/app/widgets/home.html'
  };
});

app.directive('contact', function(){
  return{
    templateUrl : '/app/widgets/contact.html'
  };
});

/*
app.controller('editElement', function($scope) {

	angular.element(document).ready(function () {
		var expected = {lat: -34.6160073, lng: -58.3890407};
		var truth = {lat: -34.617, lng: -58.3990407};

		var map = new google.maps.Map(document.getElementById('elementMap'), {
	  		zoom: 14,
	  		center: expected
		});
		
		var markerExpected = new google.maps.Marker({
	  		position: expected,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
		});
		
		var markerTruth = new google.maps.Marker({
	  		position: truth,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
		});
    });

});*/
























