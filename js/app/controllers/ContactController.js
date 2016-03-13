function ContactController($scope, $timeout) {
	$scope.name = 'Ian Valentine';

	$timeout(function() {
		$scope.name = 'The Joker';
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
