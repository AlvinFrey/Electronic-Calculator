
$("#ohmButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<div class="row" style="margin-left: 10px;margin-top: 20px;">\
		\
		<div class="input-field col s2">\
			<input id="resistor1" type="text" class="validate"><label for="resistor" class="active">Resistor (Ω)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">X</div>\
		<div class="input-field col s2">\
			<input id="current1" type="text" class="validate"><label for="current" class="active">Current (A)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputVoltage" type="text" class="validate" disabled><label for="outputVoltage" class="active">Voltage (V)</label>\
		</div>\
		<a class="menuButton" id="voltageButton" style="margin-top: 12px;">Compute</a>\
		\
		<br/>\
		<br/>\
		<br/>\
		\
		<div class="input-field col s2">\
			<input id="voltage2" type="text" class="validate"><label for="voltage" class="active">Voltage (V)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">/</div>\
		<div class="input-field col s2">\
			<input id="resistor2" type="text" class="validate"><label for="resistor" class="active">Resistor (Ω)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputCurrent" type="text" class="validate" disabled><label for="outputCurrent" class="active">Current (A)</label>\
		</div>\
		<a class="menuButton" id="currentButton" style="margin-top: 12px;">Compute</a>\
		\
		<br/>\
		<br/>\
		<br/>\
		\
		<div class="input-field col s2">\
			<input id="voltage3" type="text" class="validate"><label for="voltage" class="active">Voltage (V)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">/</div>\
		<div class="input-field col s2">\
			<input id="current3" type="text" class="validate"><label for="current" class="active">Current (A)</label>\
		</div>\
		<div class="col s1" style="margin-top: 20px;">=</div>\
		<div class="input-field col s3">\
			<input id="outputResistor" type="text" class="validate" disabled><label for="outputResistor" class="active">Resistor (Ω)</label>\
		</div>\
		<a class="menuButton" id="resistorButton" style="margin-top: 12px;">Compute</a></div>');

	$("#voltageButton").on( "click", function() {

		if($("#resistor1").val()!="" && $("#current1").val()!=""){

			if($.isNumeric($("#resistor1").val())==true && $.isNumeric($("#current1").val())==true){

				$("#outputVoltage").val($("#resistor1").val() * $("#current1").val());

			}

		}

	});

	$("#currentButton").on( "click", function() {

		if($("#voltage2").val()!="" && $("#resistor2").val()!=""){

			if($.isNumeric($("#voltage2").val())==true && $.isNumeric($("#resistor2").val())==true){

				$("#outputCurrent").val(($("#voltage2").val() / $("#resistor2").val()).toFixed(2));

			}

		}

	});

	$("#resistorButton").on( "click", function() {

		if($("#voltage3").val!="" && $("#current3").val()!=""){

			if($.isNumeric($("#voltage3").val())==true && $.isNumeric($("#current3").val())==true){

				$("#outputResistor").val(($("#voltage3").val() / $("#current3").val()).toFixed(2));

			}

		}

	});

});

$("#bridgeButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<br/>\
		<div class="row">\
		\
		<img src="../../images/schemas/Schema Pont Diviseur.png" style="width: 350px; height: 250px;display: inline-block;float: left; margin-left: 20px;margin-right: 15px;"></img>\
		\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="inputVoltage" type="text" class="validate"><label for="inputVoltage" class="active">Input Voltage (V)</label>\
		</div>\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="resistor1" type="text" class="validate"><label for="resistor1" class="active">Resistor 1 (Ω)</label>\
		</div>\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="resistor2" type="text" class="validate"><label for="resistor2" class="active">Resistor 2 (Ω)</label>\
		</div>\
		<br/>\
		<br/>\
		<br/>\
		<br/>\
		<br/>\
		<div class="input-field col s6">\
			<input id="outputDivider" type="text" class="validate" disabled><label for="outputDivider" class="active">Output Voltage (V)</label>\
		</div></div>');

	$("input").on( "change", function() {

		if($("#inputVoltage").val!="" && $("#resistor1").val()!="" && $("#resistor2").val()!=""){

			if($.isNumeric($("#inputVoltage").val())==true && $.isNumeric($("#resistor1").val())==true && $.isNumeric($("#resistor2").val())==true){

				var sum = parseInt($("#resistor1").val()) + parseInt($("#resistor2").val());

				$("#outputDivider").val(($("#resistor2").val() / sum).toFixed(2) * $("#inputVoltage").val());

			}

		}

	});

});

$("#colorButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<a class="menuButton" id="4colorButton" style="background-color: #FF9651;">4 Colors</a>\
	\
	<a class="menuButton" id="5colorButton" style="background-color: #FF9651;">5 Colors</a>\
	\
	<a class="menuButton" id="6colorButton" style="background-color: #FF9651;">6 Colors</a>\
	\
	<div class="settings" style="margin-top: 20px;">');

	$("#4colorButton").on( "click", function() {

		$(".settings").empty();
		$(".settings").append('<div class="row"><div class="input-field col s12 m3">\
    		<select class="browser-default" id="color1" name="color1">\
      			<option value="" disabled selected>Color 1</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value">Nothing</option>\
    		</select>\
    		</div>\
    	<div class="input-field col s12 m3">\
    		<select class="browser-default" id="color2" name="color2">\
      			<option value="" disabled selected>Color 2</option>\
      			<option value="0" style="background-color: #212121;">Black</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m3">\
    		<select class="browser-default" id="color3" name="color3">\
      			<option value="" disabled selected>Color 3</option>\
      			<option value="100" style="background-color: #212121;">Black</option>\
      			<option value="1000" style="background-color: #4E342E;">Brown</option>\
      			<option value="10000" style="background-color: #C62828;">Red</option>\
      			<option value="100000" style="background-color: #EF6C00;">Orange</option>\
      			<option value="1000000" style="background-color: #FFD600;">Yellow</option>\
      			<option value="10000000" style="background-color: #2E7D32;">Green</option>\
      			<option value="100000000" style="background-color: #2979FF;">Blue</option>\
      			<option value="10" style="background-color: #F7CA18;">Gold</option>\
      			<option value="1" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m3">\
    		<select class="browser-default" id="color4" name="color4">\
      			<option value="" disabled selected>Color 4</option>\
      			<option value="1%" style="background-color: #4E342E;">Brown</option>\
      			<option value="2%" style="background-color: #C62828;">Red</option>\
      			<option value="5%" style="background-color: #F7CA18;">Gold</option>\
      			<option value="10%" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<div class="input-field col s5">\
			<input id="resistorOutput" type="text" class="validate" disabled><label for="resistorOutput" class="active">Resistor</label>\
		</div>\
		<div class="input-field col s5">\
			<input id="toleranceOutput" type="text" class="validate" disabled><label for="toleranceOutput" class="active">Associated Tolerance</label>\
		</div></div>');

		$('select').material_select();

		$('select').on('change', function() { 

			var color1Selected = document.getElementById('color1').selectedIndex;  
			var color1  = document.getElementById('color1').options[color1Selected].value;

			var color2Selected = document.getElementById('color2').selectedIndex;  
			var color2  = document.getElementById('color2').options[color2Selected].value;

			var color3Selected = document.getElementById('color3').selectedIndex;  
			var color3  = document.getElementById('color3').options[color3Selected].value;

			var color4Selected = document.getElementById('color4').selectedIndex;  
			var color4  = document.getElementById('color4').options[color4Selected].value;
			
			var resistor = ((10 * color1) + (1 * color2)) * color3 / 1000;
			
			if (resistor >= 1e6){

				resistor /= 1e6;
				resistor += "MΩ"

			}else if (resistor >= 1e3){

				resistor /= 1e3;
				resistor += "kΩ";

			}else{

				resistor += " Ω";

			}

			$("#resistorOutput").val(resistor);
			$("#toleranceOutput").val(color4);

		});

	});

	$("#5colorButton").on( "click", function() {

		$(".settings").empty();
		$(".settings").append('<div class="row"><div class="input-field col s12 m2" style="margin-left: 65px;">\
    		<select class="browser-default" id="color1" name="color1">\
      			<option value="" disabled selected>Color 1</option>\
      			<option value="1" style="background-color: #4E342E;">Brown/option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value">Nothing</option>\
    		</select>\
    		</div>\
    	<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color2" name="color2">\
      			<option value="" disabled selected>Color 2</option>\
      			<option value="0" style="background-color: #212121;">Black</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color3" name="color3">\
      			<option value="" disabled selected>Color 3</option>\
      			<option value="0" style="background-color: #212121;">Black</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color4" name="color4">\
      			<option value="" disabled selected>Color 4</option>\
      			<option value="100" style="background-color: #212121;">Black</option>\
      			<option value="1000" style="background-color: #4E342E;">Brown</option>\
      			<option value="10000" style="background-color: #C62828;">Red</option>\
      			<option value="100000" style="background-color: #EF6C00;">Orange</option>\
      			<option value="1000000" style="background-color: #FFD600;">Yellow</option>\
      			<option value="10" style="background-color: #F7CA18;">Gold</option>\
      			<option value="1" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color5" name="color5">\
      			<option value="" disabled selected>Color 5</option>\
      			<option value="1%" style="background-color: #4E342E;">Brown</option>\
      			<option value="2%" style="background-color: #C62828;">Red</option>\
      			<option value="5%" style="background-color: #F7CA18;">Gold</option>\
      			<option value="10%" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<div class="input-field col s5">\
			<input id="resistorOutput" type="text" class="validate" disabled><label for="resistorOutput" class="active">Resistor</label>\
		</div>\
		<div class="input-field col s5">\
			<input id="toleranceOutput" type="text" class="validate" disabled><label for="toleranceOutput" class="active">Associated Resistor</label>\
		</div></div>');

		$('select').material_select();

		$('select').on('change', function() { 

			var color1Selected = document.getElementById('color1').selectedIndex;  
			var color1  = document.getElementById('color1').options[color1Selected].value;

			var color2Selected = document.getElementById('color2').selectedIndex;  
			var color2  = document.getElementById('color2').options[color2Selected].value;

			var color3Selected = document.getElementById('color3').selectedIndex;  
			var color3  = document.getElementById('color3').options[color3Selected].value;

			var color4Selected = document.getElementById('color4').selectedIndex;  
			var color4  = document.getElementById('color4').options[color4Selected].value;

			var color5Selected = document.getElementById('color5').selectedIndex; 
			var color5  = document.getElementById('color5').options[color5Selected].value;
			
			var resistor = ((100 * color1) + (10 * color2) + (1 * color3)) * color4 / 100;
			
			if (resistor >= 1e6){

				resistor /= 1e6;
				resistor += "MΩ"

			}else if (resistor >= 1e3){

				resistor /= 1e3;
				resistor += "kΩ";

			}else{

				resistor += " Ω";

			}

			$("#resistorOutput").val(resistor);
			$("#toleranceOutput").val(color5);

		});

	});

	$("#6colorButton").on( "click", function() {

		$(".settings").empty();
		$(".settings").append('<div class="row"><div class="input-field col s12 m2">\
    		<select class="browser-default" id="color1" name="color1">\
      			<option value="" disabled selected>Color 1</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value">Nothing</option>\
    		</select>\
    		</div>\
    	<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color2" name="color2">\
      			<option value="" disabled selected>Color 2</option>\
      			<option value="0" style="background-color: #212121;">Black</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color3" name="color3">\
      			<option value="" disabled selected>Color 3</option>\
      			<option value="0" style="background-color: #212121;">Black</option>\
      			<option value="1" style="background-color: #4E342E;">Brown</option>\
      			<option value="2" style="background-color: #C62828;">Red</option>\
      			<option value="3" style="background-color: #EF6C00;">Orange</option>\
      			<option value="4" style="background-color: #FFD600;">Yellow</option>\
      			<option value="5" style="background-color: #2E7D32;">Green</option>\
      			<option value="6" style="background-color: #2979FF;">Blue</option>\
      			<option value="7" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="8" style="background-color: #616161;">Grey</option>\
      			<option value="9">White</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color4" name="color4">\
      			<option value="" disabled selected>Color 4</option>\
      			<option value="100" style="background-color: #212121;">Black</option>\
      			<option value="1000" style="background-color: #4E342E;">Brown</option>\
      			<option value="10000" style="background-color: #C62828;">Red</option>\
      			<option value="100000" style="background-color: #EF6C00;">Orange</option>\
      			<option value="1000000" style="background-color: #FFD600;">Yellow</option>\
      			<option value="10" style="background-color: #F7CA18;">Gold</option>\
      			<option value="1" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color5" name="color5">\
      			<option value="" disabled selected>Color 5</option>\
      			<option value="1%" style="background-color: #4E342E;">Brown</option>\
      			<option value="2%" style="background-color: #C62828;">Red</option>\
      			<option value="0.5%" style="background-color: #2E7D32;">Green</option>\
      			<option value="0.25%" style="background-color: #2979FF;">Blue</option>\
      			<option value="0.1%" style="background-color: #6A1B9A;">Purple</option>\
      			<option value="5%" style="background-color: #F7CA18;">Gold</option>\
      			<option value="10%" style="background-color: #BFBFBF;">Silver</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<div class="input-field col s12 m2">\
    		<select class="browser-default" id="color6" name="color6">\
      			<option value="" disabled selected>Color 6</option>\
      			<option value="100ppm" style="background-color: #4E342E;">Brown</option>\
      			<option value="50ppm" style="background-color: #C62828;">Red</option>\
      			<option value="15ppm" style="background-color: #EF6C00;">Orange</option>\
      			<option value="25ppm" style="background-color: #FFD600;">Yellow</option>\
      			<option value="10ppm" style="background-color: #2979FF;">Blue</option>\
      			<option value="5ppm" style="background-color: #6A1B9A;">Purple</option>\
      			<option value>Nothing</option>\
    		</select>\
    		\
 		</div>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<br/>\
 		<div class="input-field col s5">\
			<input id="resistorOutput" type="text" class="validate" disabled><label for="resistorOutput" class="active">Resistor</label>\
		</div>\
		<div class="input-field col s5">\
			<input id="toleranceOutput" type="text" class="validate" disabled><label for="toleranceOutput" class="active">Associated Tolerance</label>\
		</div>\
		</div>');

		$('select').material_select();

		$('select').on('change', function() { 

			var color1Selected = document.getElementById('color1').selectedIndex;  
			var color1  = document.getElementById('color1').options[color1Selected].value;

			var color2Selected = document.getElementById('color2').selectedIndex;  
			var color2  = document.getElementById('color2').options[color2Selected].value;

			var color3Selected = document.getElementById('color3').selectedIndex;  
			var color3  = document.getElementById('color3').options[color3Selected].value;

			var color4Selected = document.getElementById('color4').selectedIndex;  
			var color4  = document.getElementById('color4').options[color4Selected].value;

			var color5Selected = document.getElementById('color5').selectedIndex; 
			var color5  = document.getElementById('color5').options[color5Selected].value;

			var color6Selected = document.getElementById('color6').selectedIndex; 
			var color6  = document.getElementById('color6').options[color6Selected].value;
			
			var resistor = ((100 * color1) + (10 * color2) + (1 * color3)) * color4 / 100;
			
			if (resistor >= 1e6){

				resistor /= 1e6;
				resistor += "MΩ"

			}else if (resistor >= 1e3){

				resistor /= 1e3;
				resistor += "kΩ";

			}else{

				resistor += " Ω";

			}

			resistor += " " + color6;

			$("#resistorOutput").val(resistor);
			$("#toleranceOutput").val(color5);

		});


	});

});

$("#ledResistorButton").on( "click", function() {

	$(".result").empty();
	$(".result").append('<br/>\
		<div class="row">\
		\
		<img src="../../images/schemas/Schema Résistance Série LED.png" style="width: 250px; height: 200px;display: inline-block;float: left; margin-left: 20px;margin-right: 15px;"></img>\
		\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="inputVoltage" type="text" class="validate"><label for="inputVoltage" class="active">Input Voltage (V)</label>\
		</div>\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="ledVoltage" type="text" class="validate"><label for="ledVoltage" class="active">LED Voltage (V)</label>\
		</div>\
		<div class="input-field col s2" style="margin-top: 55px;">\
			<input id="ledCurrent" type="text" class="validate"><label for="ledCurrent" class="active">LED Current (mA)</label>\
		</div>\
		<br/>\
		<br/>\
		<br/>\
		<br/>\
		<br/>\
		<div class="input-field col s6">\
			<input id="outputResistor" type="text" class="validate" disabled><label for="outputResistor" class="active">Resistor to put in serial (Ω)</label>\
		</div></div>');

	$("input").on( "change", function(){

		if($("#inputVoltage").val!="" && $("#ledVoltage").val()!="" && $("#ledCurrent").val()!=""){

			if($.isNumeric($("#inputVoltage").val())==true && $.isNumeric($("#ledVoltage").val())==true && $.isNumeric($("#ledCurrent").val())==true){

				var currentA = ($("#ledCurrent").val()/1000).toFixed(2);
				var subtraction = $("#inputVoltage").val() - $("#ledVoltage").val();

				$("#outputResistor").val((subtraction / currentA).toFixed(0) + " Ω");

			}

		}

	});

});


