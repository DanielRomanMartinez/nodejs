/*
	1) Busque template engine utilizando cualquiera de las herramientas descritas en
	este capítulo. Intente averiguar cuál es el módulo más popular

	2) Busque e instale el módulo coffee-script utilizando cualquiera de las herramientas
	de búsqueda descritas en este capítulo. Instale el módulo de forma local en un 
	proyecto nuevo de Node.js

	3) Busque e instale el módulo Express utilizando cualquiera de las herramientas de
	búsqueda descritas en este capítulo. Instale el módulo en su sistema de forma
	global. Compruebe que puede ejecutar el comando experess desde calquier punto
	del sistema

	4) Cree un nuevo proyecto Node.js con un archivo package.json y especifique
	un módulo que quiera instalar desde él. Compruebe que puede instalarlo con el
	comando npm install
*/

var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Esto es un ejemplo con Express');
})
 
app.listen(3000);