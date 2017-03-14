angular.module('app').service('InstragramService', function () {

	var listaFoto = [{
			image: "http://www.starcoppe.it/images/grafica-immagine-b.jpg",
			nome: "matite",
			hashtag: ["fuoricèilsole", "maiunagioia"]
		},
		{
			image: "http://blog.giallozafferano.it/cucinafacileconelena/wp-content/uploads/2015/11/torta-mele-e-ricotta.jpg",
			nome: "tortamele",
			hashtag: ["torte", "mele", "dolce"]
		},
		{
			image: "http://vignette3.wikia.nocookie.net/ironman/images/4/4f/Photo(1073).png/revision/latest?cb=20150417140445",
			nome: "ironman",
			hashtag: ["eroe"]
		},
		{
			image: "http://cdn1.www.greenstyle.it/wp-content/uploads/2014/01/carlino.jpg",
			nome: "cane",
			hashtag: ["ilcane", "bellissimo"]
		}
	];

	var getLista = function () {
		return listaFoto;
	}
	var getDetail = function (index) {
		return listaFoto[index];
	}

	return {
		getLista: getLista,
		getDetail: getDetail

	}
});