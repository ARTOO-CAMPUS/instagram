angular.module('app')
	.controller('InstragramCtrl',
		function (
			$scope,
			InstragramService) {

			$scope.$watch('cerca', function (cerca) {
				console.log(cerca);
			});

			$scope.listaFoto = InstragramService.getLista();

			$scope.dettaglio = function (index) {
				$scope.dettaglioFoto = InstragramService.getDetail(index);
				console.log($scope.dettaglioFoto);
			}

			$scope.home = function () {
				$scope.dettaglioFoto = false;
			}

		});