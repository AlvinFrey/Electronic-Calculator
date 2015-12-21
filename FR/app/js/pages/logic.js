
$("#conversionButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-left: 205px;margin-top: 20px;">\
	\
	<div class="input-field col s8">\
			<input id="decimalValue" type="text" class="validate"><label for="decimalValue" class="active">Décimal</label>\
	</div>\
	<br/>\
	<br/>\
	<br/>\
	<br/>\
	<div class="input-field col s8">\
			<input id="hexadecimalValue" type="text" class="validate"><label for="hexadecimalValue" class="active">Hexadécimal</label>\
	</div>\
	<br/>\
	<br/>\
	<br/>\
	<br/>\
	<div class="input-field col s8">\
			<input id="binaryValue" type="text" class="validate"><label for="binaryValue" class="active">Binaire</label>\
	</div>\
	\
	</div>');

	$("#decimalValue").on( "change", function(){

		var decimalValue = $("#decimalValue").val();

		if(decimalValue!=null){

			$("#hexadecimalValue").val((decimalValue-0).toString(16));
			$("#binaryValue").val((decimalValue-0).toString(2));

		}

	});

	$("#hexadecimalValue").on( "change", function(){

		var hexadecimalValue = $("#hexadecimalValue").val();

		if(hexadecimalValue!=null){

			$("#decimalValue").val(parseInt(hexadecimalValue, 16));
			$("#binaryValue").val((parseInt(hexadecimalValue, 16)).toString(2));

		}

	});

	$("#binaryValue").on( "change", function(){

		var binaryValue = $("#binaryValue").val();

		if(binaryValue!=null){

			$("#decimalValue").val(parseInt(binaryValue, 2));
			$("#hexadecimalValue").val((parseInt(binaryValue, 2)).toString(16));

		}

	});

});


$("#logicGateButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-left: 155px;margin-top: 20px;">\
	\
	<div class="input-field col s3">\
			<input id="binaryNumber1" type="text" class="validate"><label for="binaryNumber1" class="active">Nombre Binaire N°1</label>\
	</div>\
	\
	<div class="col s3">\
		<select class="browser-default" id="operator" name="operator" style="margin-top: 15px;">\
	      	<option value="" disabled selected>Opérateur</option>\
	      	<option value="AND">ET</option>\
	      	<option value="OR">OU</option>\
	      	<option value="XOR">OU EXCLUSIF</option>\
	    </select>\
    </div>\
    <div class="input-field col s3">\
			<input id="binaryNumber2" type="text" class="validate"><label for="binaryNumber2" class="active">Nombre Binaire N°2</label>\
	</div>\
	<br/>\
	<br/>\
	<br/>\
	<br/>\
	<div class="input-field col s3" style="margin-left: 165px;"">\
			<input id="result" type="text" class="validate" disabled><label for="result" class="active">Résultat</label>\
	</div>\
	</div>\
	<a class="menuButton" id="logicComputeButton" style="margin-top: 7px;">Calculer</a>');

	$("#logicComputeButton").on( "click", function(){

		var number1 = $("#binaryNumber1").val();
		var number2 = $("#binaryNumber2").val();
		
		var operatorSelected = document.getElementById('operator').selectedIndex;  
		var operator  = document.getElementById('operator').options[operatorSelected].value;

		if(number1!=null && number2!=null && operator!=null){

			if(/\b[01]+\b/.test(number1) && /\b[01]+\b/.test(number2)){

				switch(operator){

					case "AND":

						$("#result").val(number1 & number2);
						break;

					case "OR":

						$("#result").val(number1 | number2);
						break;

					case "XOR":

						$("#result").val(number1 ^ number2);
						break;

				}

			}

		}

	});

});

$("#truthTableButton").on( "click",function(){

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-top: 20px;">\
	\
	<img src="../../images/schemas/Table de Vérité.png" style="margin-left: 8px;"></img>\
	\
	</div>');

});
