var util = require('../util/util');

module.exports = {

	////////////////////////////////////////// CREATE PARAMETERS TO USE IN APPLICATION ///////////////////////////////
	
	//Gets a random data Nombre Concurso
	getRandomDataNombreConcurso : function(){
		var dataNombreConcurso = 'ConcursoRobot ' + util.getRandomNum(1001,9999);
		return dataNombreConcurso;
	},

	
	//Gets a random data Nombre Proveedor
	getRandomDataNombreProveedor : function(){
		var dataNombreProveedor = 'Prov' + util.getRandomString(5);
		return dataNombreProveedor;
	},	

	
	//Gets a random data Cuit Proveedor
	getRandomDataCuitProveedor : function(){
		var dataCuitProveedor = util.getRandomNum(10000000000,99999999999);
		return dataCuitProveedor;
	},
};