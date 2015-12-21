
$("#powerButton").on( "click", function(){

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-left: 10px;margin-top: 20px;">\
		\
		<div class="input-field col s2">\
			<input id="voltage1" type="text" class="validate"><label for="voltage1" class="active">Tension (V)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">X</div>\
		<div class="input-field col s2">\
			<input id="current1" type="text" class="validate"><label for="current1" class="active">Intensité (A)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputPower1" type="text" class="validate" disabled><label for="outputVoltage" class="active">Puissance (W)</label>\
		</div>\
		<a class="menuButton" id="powerButton1" style="margin-top: 12px;">Calculer</a>\
		\
		<br/>\
		<br/>\
		<br/>\
		\
		<div class="input-field col s2">\
			<input id="resistor2" type="text" class="validate"><label for="resistor2" class="active">Résistance (Ω)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">X</div>\
		<div class="input-field col s2">\
			<input id="current2" type="text" class="validate"><label for="current2" class="active">Intensité (A)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputPower2" type="text" class="validate" disabled><label for="outputPower2" class="active">Puissance (W)</label>\
		</div>\
		<a class="menuButton" id="powerButton2" style="margin-top: 12px;">Calculer</a>\
		\
		<br/>\
		<br/>\
		<br/>\
		\
		<div class="input-field col s2">\
			<input id="voltage3" type="text" class="validate"><label for="voltage3" class="active">Tension (V)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">/</div>\
		<div class="input-field col s2">\
			<input id="resistor3" type="text" class="validate"><label for="resistor3" class="active">Résistance (Ω)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputPower3" type="text" class="validate" disabled><label for="outputResistor3" class="active">Puissance (W)</label>\
		</div>\
		<a class="menuButton" id="powerButton3" style="margin-top: 12px;">Calculer</a></div>');

	$("#powerButton1").on( "click", function() {

		if($("#voltage1").val()!="" && $("#current1").val()!=""){

			if($.isNumeric($("#voltage1").val())==true && $.isNumeric($("#current1").val())==true){

				$("#outputPower1").val($("#voltage1").val() * $("#current1").val());

			}

		}

	});

	$("#powerButton2").on( "click", function() {

		if($("#resistor2").val()!="" && $("#current2").val()!=""){

			if($.isNumeric($("#resistor2").val())==true && $.isNumeric($("#current2").val())==true){

				$("#outputPower2").val($("#resistor2").val() * Math.pow($("#current2").val(), 2));

			}

		}

	});

	$("#powerButton3").on( "click", function() {

		if($("#voltage3").val()!="" && $("#resistor3").val()!=""){

			if($.isNumeric($("#voltage3").val())==true && $.isNumeric($("#resistor3").val())==true){

				$("#outputPower3").val((Math.pow($("#voltage3").val(), 2) / $("#resistor2").val()).toFixed(2));

			}

		}

	});

});


$("#transformerButton").on( "click", function(){

	$(".result").empty();
	$(".result").append('');

});

$("#billButton").on( "click",function(){



	$(".result").empty();
	$(".result").append('<div class="row" style="margin-top: 37px;">\
	\
	<div class="input-field col s4">\
			<input id="objectConsumptionValue" type="text" class="validate"><label for="objectConsumptionValue" class="active">Puissance de l\'appareil (W)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="kwhPriceValue" type="text" class="validate" value="0.14670"><label for="kwhPriceValue" class="active">Prix du Kwh(€/kWh)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="useTimeValue" type="text" class="validate"><label for="useTimeValue" class="active">Temps d\'utilisation (en Heures)</label>\
	</div>\
	</div>\
	<div class="row" style="margin-top: 37px;">\
	<div class="input-field col s4">\
			<input id="resultValueDaily" type="text" class="validate" disabled><label for="resultValueDaily" class="active">Coût pour la journée (€)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="resultValueMonthly" type="text" class="validate" disabled><label for="resultValueMonthly" class="active">Coût pour le mois (€)</label>\
	</div>\
	<div class="input-field col s4">\
			<input id="resultValueYearly" type="text" class="validate" disabled><label for="resultValueYearly" class="active">Coût pour l\'année (€)</label>\
	</div>\
	\
	<a class="menuButton" id="computeButton" style="margin-top: 37px;">Calculer</a></div>');

	$("#computeButton").on( "click", function() {

		console.log($("#kwhPriceValue").val());

		if($("#objectConsumptionValue").val()!="" && $("#kwhPriceValue").val()!="" && $("#useTimeValue").val()!=""){

			if($.isNumeric($("#objectConsumptionValue").val())==true && $.isNumeric($("#kwhPriceValue").val())==true && $.isNumeric($("#useTimeValue").val())==true){

				$("#resultValueDaily").val(($("#objectConsumptionValue").val() * $("#useTimeValue").val() * 0.001) * $("#kwhPriceValue").val());

				$("#resultValueMonthly").val(($("#objectConsumptionValue").val() * $("#useTimeValue").val() * 0.001) * $("#kwhPriceValue").val() * 30.4167);

				$("#resultValueYearly").val(($("#objectConsumptionValue").val() * $("#useTimeValue").val() * 0.001) * $("#kwhPriceValue").val() * 365);

			}

		}

	});

});
