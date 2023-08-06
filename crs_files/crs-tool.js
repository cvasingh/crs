// Placeholders for html
	var ph_q1 = document.getElementById("q1-marital-status").innerHTML;
	var ph_q2i = document.getElementById("q2i-spouse-cit").innerHTML;
	var ph_q2ii = document.getElementById("q2ii-spouse-joining").innerHTML;
	var ph_q3 = document.getElementById("q3-age").innerHTML;
	var ph_q4 = document.getElementById("q4-education").innerHTML;
	var ph_q4 = document.getElementById("q4b-education").innerHTML;
	var ph_q4 = document.getElementById("q4c-education").innerHTML;
	var ph_q5 = document.getElementById("q5-ol").innerHTML;
	var ph_q5ia = document.getElementById("q5i-a-fol").innerHTML;
	var ph_q5ib = document.getElementById("q5i-b-fol").innerHTML;
	var ph_q5iia =document.getElementById("q5ii-sol").innerHTML;
	var ph_q5iib = document.getElementById("q5ii-b-sol").innerHTML;
	var ph_q6i = document.getElementById("q6-work-xp").innerHTML;
	var ph_q6ii = document.getElementById("q6ii-foreign").innerHTML;
	var ph_q7 = document.getElementById("q7-certificate").innerHTML;
	var ph_q8 = document.getElementById("q8-offer").innerHTML;
	var ph_q9 = document.getElementById("q9-nomination").innerHTML;
	var ph_q10i = document.getElementById("q10-sibling").innerHTML;
	var ph_q10 = document.getElementById("q10-s-education").innerHTML;
	var ph_q11 = document.getElementById("q11-s-work-xp").innerHTML;
	var ph_q12i = document.getElementById("q12-s-fol").innerHTML;
	var ph_q12ii = document.getElementById("q12ii-s-fol").innerHTML;
	var ph_spouse = document.getElementById("spouse_questions").innerHTML;
	
window.onload = function() {
	
	
	$( ".wb-frmvld" ).trigger( "wb-init.wb-frmvld" );
	$("#crs-form").trigger("reset");
	
	//Hiding divs
	document.getElementById("q2i-spouse-cit").style.display = "none";	
	document.getElementById("q2ii-spouse-joining").style.display = "none";
	document.getElementById("q3-age").style.display = "none";		
	document.getElementById("q4-education").style.display = "none";	
	document.getElementById("q4b-education").style.display = "none";	
	document.getElementById("q4c-education").style.display = "none";			
	document.getElementById("q5-ol").style.display = "none";			
	document.getElementById("q5i-a-fol").style.display = "none";			
	document.getElementById("q5i-b-fol").style.display = "none";			
	document.getElementById("q5ii-sol").style.display = "none";	
	document.getElementById("q5ii-b-sol").style.display = "none";	
	document.getElementById("q6-work-xp").style.display = "none";	
	document.getElementById("q6ii-foreign").style.display = "none";		
	document.getElementById("q7-certificate").style.display = "none";
	document.getElementById("q8-offer").style.display = "none";
	document.getElementById("q8-noc").style.display = "none";
	document.getElementById("q9-nomination").style.display = "none";
	document.getElementById("q10-sibling").style.display = "none";
	document.getElementById("q10-s-education").style.display = "none";
	document.getElementById("q11-s-work-xp").style.display = "none";
	document.getElementById("q12-s-fol").style.display = "none";
	document.getElementById("q12ii-s-fol").style.display = "none";
	
	document.getElementById("results").style.display = "none";
}
	
	var with_spouse = false;
	var show_spouse = false;
	
	//Code, Option, With Spouse Table value, Without Spouse Table Value
	var q3_age = [
    	["A", "17 years of age or less", "0", "0"],
		["B", "18 years of age", "90", "99"],
		["C", "19 years of age", "95", "105"],
		["D", "20 years of age", "100", "110"],
		["E", "21 years of age", "100", "110"],
		["F", "22 years of age", "100", "110"],
		["G", "23 years of age", "100", "110"],
		["H", "24 years of age", "100", "110"],
		["I", "25 years of age", "100", "110"],
		["J", "26 years of age", "100", "110"],
		["K", "27 years of age", "100", "110"],
		["L", "28 years of age", "100", "110"],
		["M", "29 years of age", "100", "110"],
		["N", "30 years of age", "95", "105"],
		["O", "31 years of age", "90", "99"],
		["P", "32 years of age", "85", "94"],
		["Q", "33 years of age", "80", "88"],
		["R", "34 years of age", "75", "83"],
		["S", "35 years of age", "70", "77"],
		["T", "36 years of age", "65", "72"],
		["U", "37 years of age", "60", "66"],
		["V", "38 years of age", "55", "61"],
		["W", "39 years of age", "50", "55"],
		["X", "40 years of age", "45", "50"],
		["Y", "41 years of age", "35", "39"],
		["Z", "42 years of age", "25", "28"],
		["AA", "43 years of age", "15", "17"],
		["AB", "44 years of age", "5", "6"],
		["AC", "45 years of age or more", "0", "0"]
	];
	
	var q3_options;
	for (i=0; i < q3_age.length; i++) {
		q3_options += '<option value="' + q3_age[i][0] + '"">' + q3_age[i][1] + '</option>';	
	}
	$("#q3").append(q3_options);
	
	//Code, Option, With Spouse Table, Without Spouse Table
	var q4_education = [
    	["A", "None, or less than secondary (high school)", "0", "0"],
        ["B", "Secondary diploma (high school graduation)", "28", "30"],
        ["C", "One-year program at a university, college, trade or technical school, or other institute", "84", "90"],
        ["D", "Two-year program at a university, college, trade or technical school, or other institute", "91", "98"],
        ["E", "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)", "112", "120"],
        ["F", "Two or more certificates, diplomas or degrees. One must be for a program of three or more years", "119", "128"],
        ["G", "Master's degree, or professional degree needed to practice in a licensed profession (see Help)", "126", "135"],
        ["H", "Doctoral level university degree (PhD)", "140", "150"]
	];
	
	var q4_options;
	for (i=0; i < q4_education.length; i++) {
		q4_options += '<option value="' + q4_education[i][0] + '"">' + q4_education[i][1] + '</option>';	
	}
	$("#q4").append(q4_options);
	
	
	
	//Code, Speaking, Listening, Reading, Writing, CLB Level, With Spouse Table (FOL), Without Spouse Table (FOL),  With Spouse Table (SOL), Without Spouse Table (SOL), Spouse points
	var celpip = [
        ["H", "10 - 12", "10 - 12", "10 - 12", "10 - 12", "10", "32", "34", "6", "6", "5"],
        ["G", "9", "9", "9", "9", "9", "29", "31", "6", "6", "5"],
        ["F", "8", "8", "8", "8", "8", "22", "23", "3", "3", "3"],
        ["E", "7", "7", "7", "7", "7", "16", "17", "3", "3", "3"],
        ["D", "6", "6", "6", "6", "6", "8", "9", "1", "1", "1"],
        ["C", "5", "5", "5", "5", "5", "6", "6", "1", "1", "1"],
        ["B", "4", "4", "4", "4", "4", "6", "6", "0", "0", "0"],
        ["A", "M, 0 - 3", "M, 0 - 3", "M, 0 - 3", "M, 0 - 3", "0", "0", "0", "0", "0", "0"]
	];

	//Code, Speaking, Listening, Reading, Writing, CLB Level, With Spouse Table (FOL), Without Spouse Table (FOL),  With Spouse Table (SOL), Without Spouse Table (SOL), Spouse points  
	var ielts = [
		["H", "7.5 – 9.0", "8.5 – 9.0", "8.0 – 9.0", "7.5 – 9.0", "10", "32", "34", "6", "6", "5"],
        ["G", "7.0", "8.0", "7.0 - 7.5", "7.0", "9", "29", "31", "6", "6", "5"],
        ["F", "6.5", "7.5", "6.5", "6.5", "8", "22", "23", "3", "3", "3"],
        ["E", "6.0", "6 .0- 7.0", "6.0", "6.0", "7", "16", "17", "3", "3", "3"],
        ["D", "5.5", "5.5", "5.0 - 5.5", "5.5", "6", "8", "9", "1", "1", "1"],
        ["C", "5.0", "5.0", "4.0 - 4.5", "5.0", "5", "6", "6", "1", "1", "1"],
        ["B", "4.0 - 4.5", "4.5", "3.5", "4.0 - 4.5", "4", "6", "6", "0", "0", "0"],
        ["A", "0 - 3.5", "0- 4.0", "0 - 3.0", "0 - 3.5", "0", "0", "0", "0", "0", "0"]
	];

	//Code, Speaking, Listening, Reading, Writing, CLB Level, With Spouse Table (FOL), Without Spouse Table (FOL),  With Spouse Table (SOL), Without Spouse Table (SOL), Spouse points    
	var tef = [
		["H", "393-450", "316-360", "263-300", "393-450", "10", "32", "34", "6", "6", "5"],
        ["G", "371-392", "298-315", "248-262", "371-392", "9", "29", "31", "6", "6", "5"],
        ["F", "349-370", "280-297", "233-247", "349-370", "8", "22", "23", "3", "3", "3"],
        ["E", "310-348", "249-279", "207-232", "310-348", "7", "16", "17", "3", "3", "3"],
        ["D", "271-309", "217-248", "181-206", "271-309", "6", "8", "9", "1", "1", "1"],
        ["C", "226-270", "181-216", "151-180", "226-270", "5", "6", "6", "1", "1", "1"],
        ["B", "181-225", "145-180", "121-150", "181-225", "4", "6", "6", "0", "0", "0"],
        ["A", "0 - 180", "0 - 144", "0 - 120", "0 - 180", "0", "0", "0", "0", "0", "0"]
	];  
	
	//Code, Speaking, Listening, Reading, Writing, CLB Level, With Spouse Table (FOL), Without Spouse Table (FOL),  With Spouse Table (SOL), Without Spouse Table (SOL), Spouse points  
	var tcf = [
		["H", "16-20", "549-699", "549-699", "16-20", "10", "32", "34", "6", "6", "5"],
        ["G", "14-15", "523-548", "524-548", "14-15", "9", "29", "31", "6", "6", "5"],
        ["F", "12-13", "503-522", "499-523", "12-13", "8", "22", "23", "3", "3", "3"],
        ["E", "10-11", "458-502", "453-498", "10-11", "7", "16", "17", "3", "3", "3"],
        ["D", "7-9", "398-457", "406-452", "7-9", "6", "8", "9", "1", "1", "1"],
        ["C", "6", "369-397", "375-405", "6", "5", "6", "6", "1", "1", "1"],
        ["B", "4-5", "331-368", "342-374", "4-5", "4", "0", "0", "0", "0", "0"],
        ["A", "0-3", "0-330", "0-341", "0-3", "0", "0", "0", "0", "0", "0"]
	];                  
    
	
	$( "#q1" ).change( function() {	
		var marital_status = $( "#q1 option:selected" ).val();
		with_spouse = false;
		if (marital_status != "badvalue") {	
			if (marital_status == "B" || marital_status == "E") {
				document.getElementById("q2i-spouse-cit").style.display = "block";
				var q3_activated = $( "#q3 option:selected" ).val();
				if (q3_activated != "badvalue") {
					document.getElementById("q3-age").style.display = "block";			
				}
				else {
					document.getElementById("q3-age").style.display = "none";
				}
			}
			else {
				document.getElementById("q3-age").style.display = "block";								
				$('#q2i').prop('selectedIndex', 0);
				$('#q2ii').prop('selectedIndex', 0);								
				document.getElementById("q2i-spouse-cit").style.display = "none";
				document.getElementById("q2ii-spouse-joining").style.display = "none";
			}
		}
		else {
			document.getElementById("q2i-spouse-cit").style.display = "none";
			document.getElementById("q3-age").style.display = "none";
		}
	});
	
	$( "#q2i" ).change( function() {
		var spouse_cit = $( "#q2i option:selected" ).val();
		with_spouse = false;
		if (spouse_cit != "badvalue") {			
			if (spouse_cit == "A") {
				document.getElementById("q2ii-spouse-joining").style.display = "block";
				
				var q3_activated = $( "#q3 option:selected" ).val();
				if (q3_activated != "badvalue") {
					document.getElementById("q3-age").style.display = "block";			
				}	
				else {document.getElementById("q3-age").style.display = "none";}
			}
			else {
				document.getElementById("q3-age").style.display = "block";
				document.getElementById("q2ii-spouse-joining").style.display = "none";				
			}
		}
		else {
			document.getElementById("q2ii-spouse-joining").style.display = "none";
			document.getElementById("q3-age").style.display = "none";
		}
	});
	
	$( "#q2ii" ).change( function() {
		var spouse_joining = $( "#q2ii option:selected" ).val();
		if (spouse_joining != "badvalue") {	
			if (spouse_joining == "B") {
				with_spouse = true;
				if (show_spouse == true) {
					document.getElementById("spouse_questions").style.display = "block";
					document.getElementById("q10-s-education").style.display = "block";
				}
			}
			else {
				with_spouse = false;
				if (show_spouse == true) {
					document.getElementById("spouse_questions").style.display = "none";		
					document.getElementById("q10-s-education").style.display = "none";			
					$('#q10').prop('selectedIndex', 0);
					$('#q11').prop('selectedIndex', 0);
					$('#q12i').prop('selectedIndex', 0);
					$('#q12ii-fol-speaking').prop('selectedIndex', 0);
					$('#q12ii-fol-listening').prop('selectedIndex', 0);
					$('#q12ii-fol-reading').prop('selectedIndex', 0);
					$('#q12ii-fol-writing').prop('selectedIndex', 0);
				}
			}
			document.getElementById("q3-age").style.display = "block";	
					
		}
		else{
			document.getElementById("q3-age").style.display = "none";
		}
		
	});
	
	$( "#q3" ).change( function() {
		var app_age = $( "#q3 option:selected" ).val();
		if (app_age != "badvalue") {	
			document.getElementById("q4-education").style.display = "block";
		}
		else{
			document.getElementById("q4-education").style.display = "none";	
		}
		
	});
	
	$( "#q4" ).change( function() {
		document.getElementById("q4b-education").style.display = "block";
	});
	
	$( "#q4b" ).change( function() {
		var q4b_an = $( "#q4b option:selected" ).val();
		if (q4b_an != "badvalue") {	
			if (q4b_an == "B") {
				document.getElementById("q4c-education").style.display = "block";
				document.getElementById("q5-ol").style.display = "none";
				document.getElementById("q5i-fol").style.display = "none";
			}
			else {
				document.getElementById("q5-ol").style.display = "block";
				document.getElementById("q5i-fol").style.display = "block";
				document.getElementById("q4c-education").style.display = "none";		
				$('#q4c').prop('selectedIndex', 0);
			}
		}
		else{
			document.getElementById("q4c-education").style.display = "none";
			document.getElementById("q5-ol").style.display = "none";
			document.getElementById("q5i-fol").style.display = "none";	
		}
	});
	
	$( "#q4c" ).change( function() {
		document.getElementById("q5-ol").style.display = "block";
		document.getElementById("q5i-fol").style.display = "block";
	});
	
	$( "#q5i" ).change( function() {
		var q5i_an = $( "#q5i option:selected" ).val();
		if (q5i_an != "badvalue") {	
			if (q5i_an == "A") {
				document.getElementById("q5i-a-fol").style.display = "block";
				document.getElementById("neg-results").innerHTML = "";
				document.getElementById("neg-results").style.display = "none";
			}
			else {
				document.getElementById("q5i-a-fol").style.display = "none";
				document.getElementById("q5i-b-fol").style.display = "none";		
				$('#q5i-a').prop('selectedIndex', 0);
				document.getElementById("neg-results").style.display = "block";
				document.getElementById("neg-results").innerHTML = "<div class='alert alert-danger'><p class='mrgn-lft-lg'>Based on your answers, you <strong>do not</strong> appear to be eligible for Express Entry at this time.</p><p class='mrgn-lft-lg'>To submit an Express Entry profile, you must prove your language skills by taking an approved language test. <a href='/english/immigrate/skilled/language-testing.asp'>Find out more about language testing</a> for Express Entry.</p></div>";
			}
		}
		else{
			document.getElementById("q5i-a-fol").style.display = "none";
			document.getElementById("q5i-b-fol").style.display = "none";		
			document.getElementById("neg-results").innerHTML = "";
			document.getElementById("neg-results").style.display = "none";	
		}
	});	

	$( "#q5i-a" ).change( function() {
		var fol_test = $( "#q5i-a option:selected" ).val();
		
		$("#q5i-b-speaking").empty();
		$("#q5i-b-listening").empty();
		$("#q5i-b-reading").empty();
		$("#q5i-b-writing").empty();
		
		var q5i_b_speaking = '<option value="badvalue" label="Select...">Select...</option>';
		var q5i_b_listening = '<option value="badvalue" label="Select...">Select...</option>';
		var q5i_b_reading = '<option value="badvalue" label="Select...">Select...</option>';
		var q5i_b_writing = '<option value="badvalue" label="Select...">Select...</option>';				
			
		if (fol_test != "badvalue") {
			if (fol_test == "A") {
				for (i=0; i < celpip.length; i++) {
					q5i_b_speaking += '<option value="' + celpip[i][0] + '"">' + celpip[i][1] + '</option>';
					q5i_b_listening += '<option value="' + celpip[i][0] + '"">' + celpip[i][2] + '</option>';
					q5i_b_reading += '<option value="' + celpip[i][0] + '"">' + celpip[i][3] + '</option>';
					q5i_b_writing += '<option value="' + celpip[i][0] + '"">' + celpip[i][4] + '</option>';	
				}
			}
			else if (fol_test == "B") {
				for (i=0; i < ielts.length; i++) {
					q5i_b_speaking += '<option value="' + ielts[i][0] + '"">' + ielts[i][1] + '</option>';
					q5i_b_listening += '<option value="' + ielts[i][0] + '"">' + ielts[i][2] + '</option>';
					q5i_b_reading += '<option value="' + ielts[i][0] + '"">' + ielts[i][3] + '</option>';
					q5i_b_writing += '<option value="' + ielts[i][0] + '"">' + ielts[i][4] + '</option>';	
				}
			}
			else if (fol_test == "C") {
				for (i=0; i < tef.length; i++) {
					q5i_b_speaking += '<option value="' + tef[i][0] + '"">' + tef[i][1] + '</option>';
					q5i_b_listening += '<option value="' + tef[i][0] + '"">' + tef[i][2] + '</option>';
					q5i_b_reading += '<option value="' + tef[i][0] + '"">' + tef[i][3] + '</option>';
					q5i_b_writing += '<option value="' + tef[i][0] + '"">' + tef[i][4] + '</option>';	
				}
			}
			else if (fol_test == "D") {
				for (i=0; i < tcf.length; i++) {
					q5i_b_speaking += '<option value="' + tcf[i][0] + '"">' + tcf[i][1] + '</option>';
					q5i_b_listening += '<option value="' + tcf[i][0] + '"">' + tcf[i][2] + '</option>';
					q5i_b_reading += '<option value="' + tcf[i][0] + '"">' + tcf[i][3] + '</option>';
					q5i_b_writing += '<option value="' + tcf[i][0] + '"">' + tcf[i][4] + '</option>';	
				}
			}
			
			$("#q5i-b-speaking").append(q5i_b_speaking);
			$("#q5i-b-listening").append(q5i_b_listening);
			$("#q5i-b-reading").append(q5i_b_reading);
			$("#q5i-b-writing").append(q5i_b_writing);
			
			document.getElementById("q5i-b-fol").style.display = "block";
			populate_q5ii(fol_test);
		}
		else {document.getElementById("q5i-b-fol").style.display = "none";}
		
			
	});
	
	var display_q5ii_s = false;	
	var display_q5ii_l = false;	
	var display_q5ii_r = false;	
	var display_q5ii_w = false;	
	$( "#q5i-b-speaking" ).change( function() {
		var speaking_option = $( "#q5i-b-speaking option:selected" ).val();
		if (speaking_option != "badvalue") { display_q5ii_s = true;  } 
		else { display_q5ii_s = false;}
		display_q5ii();
	});
	$( "#q5i-b-listening" ).change( function() {
		var listening_option = $( "#q5i-b-listening option:selected" ).val();
		if (listening_option != "badvalue") { display_q5ii_l = true; } 
		else {display_q5ii_l = false;}
		display_q5ii();
	});
	$( "#q5i-b-reading" ).change( function() {
		var reading_option = $( "#q5i-b-reading option:selected" ).val();
		if (reading_option != "badvalue") { display_q5ii_r = true; } 
		else {display_q5ii_r = false;}
		display_q5ii();
	});
	$( "#q5i-b-writing" ).change( function() {
		var writing_option = $( "#q5i-b-writing option:selected" ).val();
		if (writing_option != "badvalue") { display_q5ii_w = true; } 
		else { display_q5ii_w = false;}
		display_q5ii();
	});
	
		var fol_lang;
	function populate_q5ii(taken_test) {
		$("#q5ii").empty();
		var q5ii_options = '<option value="badvalue" label="Select...">Select...</option>';
		if (taken_test == "A" || taken_test == "B" ){
			q5ii_options += '<option value="A">TEF Canada</option><option value="B">TCF Canada</option><option value="C">not applicable</option>';
			 fol_lang = "eng";
		}
		else if (taken_test == "C" || taken_test == "D"){
			q5ii_options += '<option value="A">CELPIP-G</option><option value="B">IELTS</option><option value="C">not applicable</option>';
			fol_lang = "fra";
		}
		//document.getElementById("q5ii").innerHTML = q5ii_options;
		$("#q5ii").append(q5ii_options);	
	}
	

	function display_q5ii(){
		if (display_q5ii_s == true && display_q5ii_l == true && display_q5ii_r == true && display_q5ii_w == true ){
			document.getElementById("q5ii-sol").style.display = "block";
		}	
		else{ document.getElementById("q5ii-sol").style.display = "none"; }
	}
	
	$( "#q5ii" ).change( function() {
		var sol_test = $( "#q5ii option:selected" ).val();
		
		$("#q5ii-sol-speaking").empty();
		$("#q5ii-sol-listening").empty();
		$("#q5ii-sol-reading").empty();
		$("#q5ii-sol-writing").empty();
		
		var q5ii_sol_speaking = '<option value="badvalue" label="Select...">Select...</option>';
		var q5ii_sol_listening = '<option value="badvalue" label="Select...">Select...</option>';
		var q5ii_sol_reading = '<option value="badvalue" label="Select...">Select...</option>';
		var q5ii_sol_writing = '<option value="badvalue" label="Select...">Select...</option>';
		
		
		if (sol_test != "badvalue") {
			if (sol_test != "C" ){ 
				document.getElementById("q5ii-b-sol").style.display = "block";
				if (fol_lang == "eng") {
					if (sol_test == "A") {
						for (i=0; i < tef.length; i++) {
							q5ii_sol_speaking += '<option value="' + tef[i][0] + '"">' + tef[i][1] + '</option>';
							q5ii_sol_listening += '<option value="' + tef[i][0] + '"">' + tef[i][2] + '</option>';
							q5ii_sol_reading += '<option value="' + tef[i][0] + '"">' + tef[i][3] + '</option>';
							q5ii_sol_writing += '<option value="' + tef[i][0] + '"">' + tef[i][4] + '</option>';	
						}
					}
					else if (sol_test == "B") {
						for (i=0; i < tcf.length; i++) {
							q5ii_sol_speaking += '<option value="' + tcf[i][0] + '"">' + tcf[i][1] + '</option>';
							q5ii_sol_listening += '<option value="' + tcf[i][0] + '"">' + tcf[i][2] + '</option>';
							q5ii_sol_reading += '<option value="' + tcf[i][0] + '"">' + tcf[i][3] + '</option>';
							q5ii_sol_writing += '<option value="' + tcf[i][0] + '"">' + tcf[i][4] + '</option>';	
						}
					}
				}
				else if (fol_lang == "fra") {
					if (sol_test == "A") {
						for (i=0; i < celpip.length; i++) {
							q5ii_sol_speaking += '<option value="' + celpip[i][0] + '"">' + celpip[i][1] + '</option>';
							q5ii_sol_listening += '<option value="' + celpip[i][0] + '"">' + celpip[i][2] + '</option>';
							q5ii_sol_reading += '<option value="' + celpip[i][0] + '"">' + celpip[i][3] + '</option>';
							q5ii_sol_writing += '<option value="' + celpip[i][0] + '"">' + celpip[i][4] + '</option>';	
						}
					}
					else if (sol_test == "B") {
						for (i=0; i < ielts.length; i++) {
							q5ii_sol_speaking += '<option value="' + ielts[i][0] + '"">' + ielts[i][1] + '</option>';
							q5ii_sol_listening += '<option value="' + ielts[i][0] + '"">' + ielts[i][2] + '</option>';
							q5ii_sol_reading += '<option value="' + ielts[i][0] + '"">' + ielts[i][3] + '</option>';
							q5ii_sol_writing += '<option value="' + ielts[i][0] + '"">' + ielts[i][4] + '</option>';	
						}
					}
				}
					
					$("#q5ii-sol-speaking").append(q5ii_sol_speaking);
					$("#q5ii-sol-listening").append(q5ii_sol_listening);
					$("#q5ii-sol-reading").append(q5ii_sol_reading);
					$("#q5ii-sol-writing").append(q5ii_sol_writing);
			} 
			else { 
				document.getElementById("q5ii-b-sol").style.display = "none";
				document.getElementById("q6-work-xp").style.display = "block";				
			}
		}
		else{document.getElementById("q5ii-b-sol").style.display = "none";}
	});
	
	var display_q6_s = false;	
	var display_q6_l = false;	
	var display_q6_r = false;	
	var display_q6_w = false;	
	
	$( "#q5ii-sol-speaking" ).change( function() {
		var sol_speaking_option = $( "#q5ii-sol-speaking option:selected" ).val();
		if (sol_speaking_option != "badvalue") { display_q6_s = true;  } 
		else { display_q6_s = false;}
		display_q6();
	});
	$( "#q5ii-sol-listening" ).change( function() {
		var sol_listening_option = $( "#q5ii-sol-listening option:selected" ).val();
		if (sol_listening_option != "badvalue") { display_q6_l = true; } 
		else {display_q6_l = false;}
		display_q6();
	});
	$( "#q5ii-sol-reading" ).change( function() {
		var sol_reading_option = $( "#q5ii-sol-reading option:selected" ).val();
		if (sol_reading_option != "badvalue") { display_q6_r = true; } 
		else {display_q6_r = false;}
		display_q6();
	});
	$( "#q5ii-sol-writing" ).change( function() {
		var sol_writing_option = $( "#q5ii-sol-writing option:selected" ).val();
		if (sol_writing_option != "badvalue") { display_q6_w = true; } 
		else { display_q6_w = false;}
		display_q6();
	});
	
	function display_q6(){
		if (display_q6_s == true && display_q6_l == true && display_q6_r == true && display_q6_w == true ){
			document.getElementById("q6-work-xp").style.display = "block";
		}	
		else{ document.getElementById("q6-work-xp").style.display = "none";			
			$('#q6-work-xp').prop('selectedIndex', 0); }
	}
	
	$( "#q6i" ).change( function() {
		var x = $( "#q6i option:selected" ).val();
		if (x != "badvalue") {
			document.getElementById("q6ii-foreign").style.display = "block";
		}
		else {document.getElementById("q6ii-foreign").style.display = "none";			
			$('#q6ii-foreign').prop('selectedIndex', 0);}
	});
	
	$( "#q6ii" ).change( function() {
		var x = $( "#q6ii option:selected" ).val();
		if (x != "badvalue") {
			document.getElementById("q7-certificate").style.display = "block";
		}
		else {document.getElementById("q7-certificate").style.display = "none";			
			$('#q7-certificate').prop('selectedIndex', 0);}
	});
	
	$( "#q7" ).change( function() {
		var x = $( "#q7 option:selected" ).val();
		if (x != "badvalue") {
			document.getElementById("q8-offer").style.display = "block";
		}
		else {document.getElementById("q8-offer").style.display = "none";			
			$('#q8-offer').prop('selectedIndex', 0);}
	});
	
	$( "#q8" ).change( function() {
		var x = $( "#q8 option:selected" ).val();
		if (x != "badvalue") {	
			if (x == "B") {
				document.getElementById("q8-noc").style.display = "block";
				document.getElementById("q9-nomination").style.display = "none";
			}
			else {
				document.getElementById("q8-noc").style.display = "none";	
				document.getElementById("q9-nomination").style.display = "block";	
				$('#q8-noc').prop('selectedIndex', 0);
			}
		}
		else{
			document.getElementById("q8-noc").style.display = "none";	
			document.getElementById("q9-nomination").style.display = "none";
		}
		
	});
	
	$( "#q8a" ).change( function() {
		var x = $( "#q8a option:selected" ).val();
		if (x != "badvalue") {	
			document.getElementById("q9-nomination").style.display = "block";
		}
		else{
			document.getElementById("q9-nomination").style.display = "none";
		}
		
	});


	$( "#q9" ).change( function() {
		document.getElementById("q10-sibling").style.display = "block";
	});


	
	$( "#q10i" ).change( function() {
		var x = $( "#q10i option:selected" ).val();
		if (x != "badvalue") {
			show_spouse = true;
			//document.getElementById("q10-s-education").style.display = "block";
			//Travelling with spouse
			if (with_spouse == true ) {
				document.getElementById("q10-s-education").style.display = "block";			
			}
			//travelling witout spouse
			else {
				document.getElementById("q10-s-education").style.display = "none";
				//document.getElementById("results").style.display = "block";
				$( "#submit" ).removeClass( "disabled" );
			}
		}
		else {
			document.getElementById("results").style.display = "none";
			$( "#submit" ).addClass( "disabled" );
			}
	});
	
	$( "#q10" ).change( function() {
		var x = $( "#q10 option:selected" ).val();
		if (x != "badvalue") {
			document.getElementById("q11-s-work-xp").style.display = "block";
		}
		else {
			document.getElementById("q11-s-work-xp").style.display = "none";
		}
	});
	
	$( "#q11" ).change( function() {
		var x = $( "#q11 option:selected" ).val();
		if (x != "badvalue") {
			document.getElementById("q12-s-fol").style.display = "block";
		}
		else {document.getElementById("q12-s-fol").style.display = "none";}
	});

	
	$( "#q12i" ).change( function() {
		var s_fol_test = $( "#q12i option:selected" ).val();
		
		$("#q12ii-fol-speaking").empty();
		$("#q12ii-fol-listening").empty();
		$("#q12ii-fol-reading").empty();
		$("#q12ii-fol-writing").empty();
		
		var q12i_speaking = '<option value="badvalue" label="Select...">Select...</option>';
		var q12i_listening = '<option value="badvalue" label="Select...">Select...</option>';
		var q12i_reading = '<option value="badvalue" label="Select...">Select...</option>';
		var q12i_writing = '<option value="badvalue" label="Select...">Select...</option>';				
			
		if (s_fol_test != "badvalue") {
			$( "#submit" ).addClass( "disabled" );
			document.getElementById("q12ii-s-fol").style.display = "block";
			if (s_fol_test == "A") {
				for (i=0; i < celpip.length; i++) {
					q12i_speaking += '<option value="' + celpip[i][0] + '"">' + celpip[i][1] + '</option>';
					q12i_listening += '<option value="' + celpip[i][0] + '"">' + celpip[i][2] + '</option>';
					q12i_reading += '<option value="' + celpip[i][0] + '"">' + celpip[i][3] + '</option>';
					q12i_writing += '<option value="' + celpip[i][0] + '"">' + celpip[i][4] + '</option>';	
				}
			}
			else if (s_fol_test == "B") {
				for (i=0; i < ielts.length; i++) {
					q12i_speaking += '<option value="' + ielts[i][0] + '"">' + ielts[i][1] + '</option>';
					q12i_listening += '<option value="' + ielts[i][0] + '"">' + ielts[i][2] + '</option>';
					q12i_reading += '<option value="' + ielts[i][0] + '"">' + ielts[i][3] + '</option>';
					q12i_writing += '<option value="' + ielts[i][0] + '"">' + ielts[i][4] + '</option>';	
				}
			}
			else if (s_fol_test == "C") {
				for (i=0; i < tef.length; i++) {
					q12i_speaking += '<option value="' + tef[i][0] + '"">' + tef[i][1] + '</option>';
					q12i_listening += '<option value="' + tef[i][0] + '"">' + tef[i][2] + '</option>';
					q12i_reading += '<option value="' + tef[i][0] + '"">' + tef[i][3] + '</option>';
					q12i_writing += '<option value="' + tef[i][0] + '"">' + tef[i][4] + '</option>';	
				}
			}
			else if (s_fol_test == "D") {
				for (i=0; i < tcf.length; i++) {
					q12i_speaking += '<option value="' + tcf[i][0] + '"">' + tcf[i][1] + '</option>';
					q12i_listening += '<option value="' + tcf[i][0] + '"">' + tcf[i][2] + '</option>';
					q12i_reading += '<option value="' + tcf[i][0] + '"">' + tcf[i][3] + '</option>';
					q12i_writing += '<option value="' + tcf[i][0] + '"">' + tcf[i][4] + '</option>';	
				}
			}
			else if (s_fol_test == "E") {
				document.getElementById("q12ii-s-fol").style.display = "none";
				$( "#submit" ).removeClass( "disabled" );
			}
			$("#q12ii-fol-speaking").append(q12i_speaking);
			$("#q12ii-fol-listening").append(q12i_listening);
			$("#q12ii-fol-reading").append(q12i_reading);
			$("#q12ii-fol-writing").append(q12i_writing);			
		}
		else {
			$( "#submit" ).addClass( "disabled" );
			}
			
		var btn_sub_s = false;	
		var btn_sub_l = false;	
		var btn_sub_r = false;	
		var btn_sub_w = false;	
			
		$( "#q12ii-fol-speaking" ).change( function() {
			var spouse_speaking = $( "#q12ii-fol-speaking option:selected" ).val();
			if (spouse_speaking != "badvalue") { btn_sub_s = true;  } 
			else { btn_sub_s = false;}
			btn_sub();
		});
		$( "#q12ii-fol-listening" ).change( function() {
			var spouse_listening = $( "#q12ii-fol-listening option:selected" ).val();
			if (spouse_listening != "badvalue") { btn_sub_l = true; } 
			else {btn_sub_l = false;}
			btn_sub();
		});
		$( "#q12ii-fol-reading" ).change( function() {
			var spouse_reading = $( "#q12ii-fol-reading option:selected" ).val();
			if (spouse_reading != "badvalue") { btn_sub_r = true; } 
			else {btn_sub_r = false;}
			btn_sub();
		});
		$( "#q12ii-fol-writing" ).change( function() {
			var spouse_writing = $( "#q12ii-fol-writing option:selected" ).val();
			if (spouse_writing != "badvalue") { btn_sub_w = true; } 
			else { btn_sub_w = false;}
			btn_sub();
		});
			
		function btn_sub(){
				if (btn_sub_s == true && btn_sub_l == true && btn_sub_r == true && btn_sub_w == true ){
					$( "#submit" ).removeClass( "disabled" );
				}	
				else{ 		
					$( "#submit" ).addClass( "disabled" ); 
					}
			}    	
	});
	
	
	//Submit/Calculations
	$( "#crs-form" ).submit( function( event ) {
		event.preventDefault();
		var q3 = 0;
		var q4 = 0;
		var q4a = 0;
		var q4b = 0;
		var q5i = 0;
		var q5ii = 0;
		var q6i = 0;
		var q6ii = 0;
		var q7 = 0;
		var q8 = 0;
		var q8a = 0;
		var q9 = 0;
		var q10i = 0;		
		var q10 = 0;
		var q11 = 0;
		var q12i = 0;
		var q12ii = 0;
		var core_factors = 0;
		var spouse_factors = 0;
		var skill_factors = 0;
		var bonus_factors = 0;
		
		//"answer" changes with each question calculation results.
		//"z" is used as a placeholder for questions 5i, 5ii and 12; "z" becomes the array that corresponds with the FOL/SOL test.		
		var answer, z;	
		//document.getElementById("test_variables").innerHTML = "w/ spouse = " + with_spouse
		
		//Core/Human capital factors
		
		//Question 3
		answer = $( "#q3 option:selected" ).val();
		for (i=0; i < q3_age.length; i++) {
			if (answer == q3_age[i][0]) {
				if (with_spouse == true) {
					q3 = q3_age[i][2];
				}
				else {q3 = q3_age[i][3];}
			}
		}
		core_factors += parseInt(q3);
		//document.getElementById("test_q3").innerHTML = "Question 3 = " + answer + " || q3 = " + q3;
		
		
		//Question 4
		answer = $( "#q4 option:selected" ).val(); 		
		for (i=0; i < q4_education.length; i++) {
			if (answer == q4_education[i][0]) {
				if (with_spouse == true) {
					q4 = q4_education[i][2];
				}
				else {q4 = q4_education[i][3];}
			}
		}
		core_factors += parseInt(q4);
		//document.getElementById("test_q4").innerHTML = "Question 4 = " + answer + " || q4 = " + q4;
		
		//canadian study experience
		var q4c_answer;
		var temp_q4c_answer = 0;
		q4c_answer = $("#q4c option:selected").val();
		if (q4c_answer == "B") {temp_q4c_answer = 15}
		else if (q4c_answer == "C") {temp_q4c_answer = 30}
//		core_factors += parseInt(temp_q4c_answer);
		
		//Question 5i
		answer = $( "#q5i-a option:selected" ).val();
		if (answer == "A") {z = celpip; other_answer = ""}
		else if (answer == "B") {z = ielts;}
		else if (answer == "C") {z = tef;}
		else if (answer == "D") {z = tcf;}
		
		var q5_s, q5_l, q5_r, q5_w;
		q5_s = $( "#q5i-b-speaking option:selected" ).val(); 
		q5_l = $( "#q5i-b-listening option:selected" ).val(); 
		q5_r = $( "#q5i-b-reading option:selected" ).val(); 
		q5_w = $( "#q5i-b-writing option:selected" ).val(); 
		
		var clb_s, clb_l, clb_r, clb_w;
					
		for (i=0; i < z.length; i++) {
			if (q5_s == z[i][0]) {
				if (with_spouse == true) {q5i += parseInt(z[i][6]);}
				else {q5i += parseInt(z[i][7]);}
				clb_s = parseInt(z[i][5]);
			}
			if (q5_l == z[i][0]) {
				if (with_spouse == true) {q5i += parseInt(z[i][6]);}
				else {q5i += parseInt(z[i][7]);}
				clb_l = parseInt(z[i][5]);
			}
			if (q5_r == z[i][0]) {
				if (with_spouse == true) {q5i += parseInt(z[i][6]);}
				else {q5i += parseInt(z[i][7]);}
				clb_r = parseInt(z[i][5]);
			}
			if (q5_w == z[i][0]) {
				if (with_spouse == true) {q5i += parseInt(z[i][6]);}
				else {q5i += parseInt(z[i][7]);}
				clb_w = parseInt(z[i][5]);
			}
		}
		
		core_factors += parseInt(q5i);
		//document.getElementById("test_q5i").innerHTML = "Question 5i = " + answer + " || q5i = " + q5i;
		//document.getElementById("test_q5i").innerHTML += "<br />CLBs = " + clb_s + " || CLBl = " + clb_l + " || CLBr = " + clb_r + " || CLBw = " + clb_w;
		
		//Question 5ii
		answer = $( "#q5ii option:selected" ).val();
		if (fol_lang = "en") {
			if (answer == "A") {z = celpip;}
			else if (answer == "B") {z = ielts;}
		}
		else {
			if (answer == "A") {z = tef;}
			if (answer == "B") {z = tcf;}
		}
		q5_s = $( "#q5ii-sol-speaking option:selected" ).val(); 
		q5_l = $( "#q5ii-sol-listening option:selected" ).val(); 
		q5_r = $( "#q5ii-sol-reading option:selected" ).val(); 
		q5_w = $( "#q5ii-sol-writing option:selected" ).val(); 
		
		for (i=0; i < z.length; i++) {
			if (q5_s == z[i][0]) {
				if (with_spouse == true) {q5ii += parseInt(z[i][8]);}
				else {q5ii += parseInt(z[i][9]);}
			}
			if (q5_l == z[i][0]) {
				if (with_spouse == true) {q5ii += parseInt(z[i][8]);}
				else {q5ii += parseInt(z[i][9]);}
			}
			if (q5_r == z[i][0]) {
				if (with_spouse == true) {q5ii += parseInt(z[i][8]);}
				else {q5ii += parseInt(z[i][9]);}
			}
			if (q5_w == z[i][0]) {
				if (with_spouse == true) {q5ii += parseInt(z[i][8]);}
				else {q5ii += parseInt(z[i][9]);}
			}
		}
		
		if (with_spouse == true) {
			if (q5ii > 22 ) { 
			q5ii = 22;
			}
		}
		
		
		core_factors += parseInt(q5ii);
		//document.getElementById("test_q5ii").innerHTML = "Question 5ii = " + answer + " || q5ii = " + q5ii;
		
		
		//Question 6i
		answer = $( "#q6i option:selected" ).val(); 
		if (with_spouse == true) {
			if (answer == "A") { q6i = 0; }	
			else if (answer == "B"){ q6i = 35; }
			else if (answer == "C"){ q6i = 46; }
			else if (answer == "D"){ q6i = 56; }
			else if (answer == "E"){ q6i = 63; }
			else if (answer == "F"){ q6i = 70; }
		}
		else {
			if (answer == "A") { q6i = 0; }	
			else if (answer == "B"){ q6i = 40; }
			else if (answer == "C"){ q6i = 53; }
			else if (answer == "D"){ q6i = 64; }
			else if (answer == "E"){ q6i = 72; }
			else if (answer == "F"){ q6i = 80; }
		}			
		core_factors += parseInt(q6i);
		//document.getElementById("test_q6i").innerHTML = "Question 6i = " + answer + " || q6i = " + q6i;
		//document.getElementById("test_q6i").innerHTML = "Question 6i = " + answer;
		
		
		//Question 6ii
		answer = $( "#q6ii option:selected" ).val();
		if (with_spouse == true) {
			if (answer == "A") { q6ii = 0; }	
			else if (answer == "B"){ q6ii = 35; }
			else if (answer == "C"){ q6ii = 46; }
			else if (answer == "D"){ q6ii = 56; }
		}
		else {
			if (answer == "A") { q6ii = 0; }	
			else if (answer == "B"){ q6ii = 40; }
			else if (answer == "C"){ q6ii = 52; }
			else if (answer == "D"){ q6ii = 64; }
			
		}			
		//document.getElementById("test_q6ii").innerHTML = "Question 6ii = " + answer + " || q6ii = " + q6ii;
		
		//Question 9
		answer = $( "#q9 option:selected" ).val();
		if (answer == "A") {q9 = 0;}
		else {q9 = 600;}
		

		/************ START - CORE/HUMAN CAPITAL FACTORS ************/
		document.getElementById("core_factors").innerHTML = '<h3><strong>Core/Human capital factors</strong></h3><ul class="list-unstyled"><li>Age = ' + q3 + '</li><li>Level of education = ' + q4 + '</li><li>Official Languages = ' + (q5i + q5ii) + '<ul class="lst-no-blt"><li><em>First Official Language</em> = ' + q5i + '</li><li><em>Second Official Language</em> = ' + q5ii + '</li></ul></li><li>Canadian work experience = ' + q6i + '</li></ul><p><strong>Subtotal - Core/Human capital factors</strong> = ' + core_factors + '</p>';
		/************ END - CORE/HUMAN CAPITAL FACTORS ************/
		
		/************ START - SPOUSE FACTORS ************/		
		//Question 10
		answer = $( "#q10 option:selected" ).val();
		if (answer == "A") {q10 = 0;}
		else if (answer == "B") {q10 = 2;}
		else if (answer == "C") {q10 = 6;}
		else if (answer == "D") {q10 = 7;}
		else if (answer == "E") {q10 = 8;}
		else if (answer == "F") {q10 = 9;}
		else if (answer == "G") {q10 = 10;}
		else if (answer == "H") {q10 = 10;}
		//document.getElementById("test_q10").innerHTML = "Question 10 = " + answer;
		
		//Question 11
		answer = $( "#q11 option:selected" ).val();
		if (answer == "A") {q11 = 0;}
		else if (answer == "B") {q11 = 5;}
		else if (answer == "C") {q11 = 7;}
		else if (answer == "D") {q11 = 8;}
		else if (answer == "E") {q11 = 9;}
		else if (answer == "F") {q11 = 10;}
		//document.getElementById("test_q11").innerHTML = "Question 11 = " + answer;
		
		//Question 12i
		answer = $( "#q12i option:selected" ).val();
		if (answer == "A") {z = celpip; other_answer = ""}
		else if (answer == "B") {z = ielts;}
		else if (answer == "C") {z = tef;}
		else if (answer == "D") {z = tcf;}
		
		var q12_s, q12_l, q12_r, q12_w;
		q12_s = $( "#q12ii-fol-speaking option:selected" ).val(); 
		q12_l = $( "#q12ii-fol-listening option:selected" ).val(); 
		q12_r = $( "#q12ii-fol-reading option:selected" ).val(); 
		q12_w = $( "#q12ii-fol-writing option:selected" ).val(); 
		
		var s_clb_s, s_clb_l, s_clb_r, s_clb_w;
					
		for (i=0; i < z.length; i++) {
			if (q12_s == z[i][0]) {
				q12i += parseInt(z[i][10]);
				s_clb_s = parseInt(z[i][5]);
			}
			if (q12_l == z[i][0]) {
				q12i += parseInt(z[i][10]);
				s_clb_l = parseInt(z[i][5]);
			}
			if (q12_r == z[i][0]) {
				q12i += parseInt(z[i][10]);
				s_clb_r = parseInt(z[i][5]);

			}
			if (q12_w == z[i][0]) {
				q12i += parseInt(z[i][10]);
				s_clb_w = parseInt(z[i][5]);
			}
		}
		//document.getElementById("test_q12i").innerHTML = "Question 12i = " + answer + " || q12i = " + q12i;
		//document.getElementById("test_q12ii").innerHTML = "Question 12ii = CLBs = " + s_clb_s + " || CLBl = " + s_clb_l + " || CLBr = " + s_clb_r + " || CLBw = " + s_clb_w;
		
		spouse_factors = q10 + q11 + q12i;
		document.getElementById('spouse_factors').innerHTML = '<hr/><h3>Spouse factors</h3><ul class="list-unstyled"><li>Level of education = ' + q10 + '</li><li>First Official Languages = ' + q12i + '</li><li>Canadian work experience = ' + q11 + '</li></ul><p><strong>Subtotal - Spouse factors</strong> = ' + spouse_factors + '</p>';
		/************ END - SPOUSE FACTORS ************/
		
		/************ START - SKILL FACTORS ************/
		
		/************ START - Education A (With good OL proficiency and a post-secondary degree) ************/
		var q4_answer = $( "#q4 option:selected" ).val();
		var educationA = 0;
		
		// calculates number of points awarded based on CLB score
		// If education level option A or B, no points are awarded.
		if (q4_answer == "A" || q4_answer == "B") {
			educationA = 0;
		}/*
		else if (clb_s <= 6 || clb_l < 6 || clb_r < 6 || clb_w < 6){
			educationA = 0;
		}*/
		// If education level is C-E, and CLB levels are between seven and nine, 13 points are awarded. If CLB levels are all higher than nine, 25 points, otherwise, no points.
		else if (q4_answer == "C" || q4_answer == "D" || q4_answer == "E") {
			if (clb_s < 7 || clb_l < 7 || clb_r < 7 || clb_w < 7){
				educationA = 0;
			}
			else if (clb_s >=9 && clb_l >=9 && clb_r >=9 && clb_w >=9){
				educationA = 25;
			}
			else {educationA = 13;}
		}
		// If education level is F-H, and CLB levels are between seven and nine, 25 points are awarded. If CLB levels are all higher than nine, 50 points, otherwise, no points.
		else if (q4_answer == "F" || q4_answer == "G" || q4_answer == "H") {
			if (clb_s < 7 || clb_l < 7 || clb_r < 7 || clb_w < 7){
				educationA = 0;
			}
			else if (clb_s >=9 && clb_l >=9 && clb_r >=9 && clb_w >=9){
				educationA = 50;
			}
			else {educationA = 25;}
		}  		
		
		/************ END - Education A ************/
		/************ START - Education B (With Canadian Work Experience and a post-secondary degree) ************/
		var q4_answer = $( "#q4 option:selected" ).val();
		var q6i_answer = $( "#q6i option:selected" ).val();
		var educationB = 0;
		
		// calculates number of points awarded based on CLB score
		// If education level option A or B, no points are awarded.
		if (q4_answer == "A" || q4_answer == "B") {
			educationB = 0;
		}
		else if (q4_answer == "C" || q4_answer == "D" || q4_answer == "E") {
			if (q6i_answer == "A") {
				educationB = 0;
			}
			else if (q6i_answer == "B"){
				educationB = 13;
			}
			else {
				educationB = 25;
			}
		}
		else if (q4_answer == "F" || q4_answer == "G" || q4_answer == "H") {
			if (q6i_answer == "A") {
				educationB = 0;
			}
			else if (q6i_answer == "B"){
				educationB = 25;
			}
			else {
				educationB = 50;
			}
		}
		
		/************ END - Education B ************/
		var educationTot = 0;
		if ((educationA + educationB) > 50) {educationTot = 50}
		else {educationTot = educationA + educationB}
		if (educationTot > 50) {educationTot = 50}
		
		var q6i_answer = $( "#q6i option:selected" ).val()
		var q6ii_answer = $( "#q6ii option:selected" ).val();
		var foreign_xp_1 = 0;
		var foreign_xp_2 = 0;
		
		if (q6ii_answer == "A") {
			foreign_xp_1 = 0;
			foreign_xp_2 = 0;
		}
		else if (q6ii_answer == "B" || q6ii_answer == "C"){
			//Calcualtes OL
			if (clb_s < 7 || clb_l < 7 || clb_r < 7 || clb_w < 7){
				foreign_xp_1 = 0;
			}
			else if (clb_s >=9 && clb_l >=9 && clb_r >=9 && clb_w >=9){
				foreign_xp_1 = 25;
			}
			else {foreign_xp_1 = 13;}
			
			//Calculates Work XP
			if (q6i_answer == "A"){foreign_xp_2 = 0;}
			else if (q6i_answer == "B"){foreign_xp_2 = 13;}	
			else if (q6i_answer == "C" || q6i_answer == "D" || q6i_answer == "E" ||  q6i_answer == "F"){foreign_xp_2 = 25;}			
		}
		else if (q6ii_answer == "D"){
			//Calculates OL
			if (clb_s < 7 || clb_l < 7 || clb_r < 7 || clb_w < 7){
				foreign_xp_1 = 0;
			}
			else if (clb_s >=9 && clb_l >=9 && clb_r >=9 && clb_w >=9){
				foreign_xp_1 = 50;
			}
			else {foreign_xp_1 = 25;}
			
			//Calculates Work XP
			if (q6i_answer == "A"){foreign_xp_2 = 0;}
			else if (q6i_answer == "B"){foreign_xp_2 = 25;}	
			else if (q6i_answer == "C" || q6i_answer == "D" || q6i_answer == "E" || q6i_answer == "F"){foreign_xp_2 = 50;}	
		}
		
		var foreign_xp_tot = 0;
		
		if ((foreign_xp_1 + foreign_xp_2) > 50) {foreign_xp_tot = 50;}
		else {foreign_xp_tot = foreign_xp_1 + foreign_xp_2;}
		
		if (foreign_xp_tot > 50) { foreign_xp_tot = 50}
		

		//Certificate of qualifications
		// With good OL proficiency adn a post-secondary degree
		var q7_answer = $( "#q7 option:selected" ).val();
		var certificate = 0;
		
		if (q7_answer == "B") {
			if (clb_s < 5 || clb_l < 5 || clb_r < 5 || clb_w < 5){
				certificate = 0;
			}
			else if (clb_s >=7 && clb_l >=7 && clb_r >=7 && clb_w >=7){
				certificate = 50;
			}
			else {certificate = 25;}
		}	
		else {certificate = 0;}
		//document.getElementById("test_q7").innerHTML = "Question 7 = " + q7_answer;
		
		
		
		skill_factors = educationTot + foreign_xp_tot + certificate;
		
		if (skill_factors > 100) {skill_factors = 100;}
		
		document.getElementById("skill_factors").innerHTML = '<hr/><h3>Skill transferability factors</h3><h4>Education (to a maximum of 50 points)</h4><ul class="list-unstyled"><li>A) Official Language proficiency and education  = ' + educationA + '</li><li>B) Canadian work experience and education  = ' + educationB + '</li></ul><p><em>Subtotal</em> = ' + educationTot + '</p><h4>Foreign work experience (to a maximum of 50 points)</h4><ul class="list-unstyled"><li>A) Official Language proficiency and foreign work experience = ' + foreign_xp_1 + '</li><li>B) Canadian and foreign work experience = ' + foreign_xp_2 + '</li></ul><p><em>Subtotal</em> = ' + foreign_xp_tot + '</p><p>Certificate of qualification = ' + certificate + '</p><p><strong>Subtotal Skill transferability factors</strong> = ' + skill_factors + '</p>';


		/************ END - SKILL FACTORS ************/
		
				
		var subtotal, grandtotal;
		
			
		//Bonus Points
		

		var q4c_answer = $("#q4c option:selected").val();
	
		var q8_answer = $( "#q8 option:selected" ).val();
		var q8a_answer = $( "#q8a option:selected" ).val();
		var q9_answer = $( "#q9 option:selected" ).val();
		
		var q5ii_answer = $( "#q5i-a option:selected" ).val();
			var q5ii_speaking = $( "#q5i-b-speaking option:selected" ).val();
			var q5ii_listening = $( "#q5i-b-listening option:selected" ).val();
			var q5ii_reading = $( "#q5i-b-reading option:selected" ).val();
			var q5ii_writing = $( "#q5i-b-writing option:selected" ).val();
		
		
		var q5iii_answer = $( "#q5ii option:selected" ).val();
			var q5iii_speaking = $( "#q5ii-sol-speaking option:selected" ).val();
			var q5iii_listening = $( "#q5ii-sol-listening option:selected" ).val();
			var q5iii_reading = $( "#q5ii-sol-reading option:selected" ).val();
			var q5iii_writing = $( "#q5ii-sol-writing option:selected" ).val();
					
		var q10i_answer = $( "#q10i option:selected" ).val();

		//canadian study experience
		var study_bonus = 0;
		
		if (q4c_answer == "B") {study_bonus = 15}
		else if (q4c_answer == "C") {study_bonus = 30}
		
		bonus_factors += study_bonus;
		
		//job offer
		var job_bonus = 0;
		
		if(q8_answer == "B" || q8_answer == "C" ){
			if(q8a_answer == "A"){job_bonus = 200}
			else if(q8a_answer == "B"){job_bonus = 50}
		}
		
		bonus_factors += job_bonus;
		
		//Question 9 - provincial nomination
		var prov_nom_bonus = 0;
		
		if (q9_answer == "B") {prov_nom_bonus = 600;}
		
		bonus_factors += prov_nom_bonus;
		
		//French skills
		var french_bonus = 0;
		
		//Check if you answered french as official language
		//if you took a french test (TEF = C or TCF = D) then continue, else no bonus score for first official language and end if statement.
			//if you didn't take an English test OR if you scored higher than CLB 4
				// = 25 points
			//if you took an Engilsh test AND you scored above CLB5
				// = 50 points
				
		//if you took an English test and you took a French second test
			//if you scored higher than 7 and if you scored higher than CLB 5 
				// = 50
			//if you scored higher than 7
				// = 25
		
		
		//if TEF or TCF
		if (q5ii_answer == "C" || q5ii_answer == "D" ){
		
			//If you scored higher than 7 (E to H)
			if (
				(q5ii_speaking == "E" || q5ii_speaking == "F" || q5ii_speaking == "G" || q5ii_speaking == "H") && 
				(q5ii_listening == "E" || q5ii_listening == "F" || q5ii_listening == "G" || q5ii_listening == "H") && 
				(q5ii_reading == "E" || q5ii_reading == "F" || q5ii_reading == "G" || q5ii_reading == "H") && 
				(q5ii_writing == "E" || q5ii_writing == "F" || q5ii_writing == "G" || q5ii_writing == "H")
			){
			
				french_bonus = 25;
				if(q5iii_answer == "A" || q5iii_answer == "B"){
					if(
						(q5iii_speaking != "A" && q5iii_speaking != "B") && 
						(q5iii_listening != "A" && q5iii_listening != "B") && 
						(q5iii_reading != "A" && q5iii_reading != "B") && 
						(q5iii_writing != "A" && q5iii_writing != "B")
					){
						french_bonus = 50;
					}
				}
				
			}						
		}
		else if(q5ii_answer == "A" || q5ii_answer == "B"){					
			
			if (q5iii_answer == "A" || q5iii_answer == "B") {
				
				if (
					(q5iii_speaking == "E" || q5iii_speaking == "F" || q5iii_speaking == "G" || q5iii_speaking == "H") && 
					(q5iii_listening == "E" || q5iii_listening == "F" || q5iii_listening == "G" || q5iii_listening == "H") && 
					(q5iii_reading == "E" || q5iii_reading == "F" || q5iii_reading == "G" || q5iii_reading == "H") && 
					(q5iii_writing == "E" || q5iii_writing == "F" || q5iii_writing == "G" || q5iii_writing == "H")
				){
					french_bonus = 25;
					
					if (
						(q5ii_speaking == "C" || q5ii_speaking == "D" || q5ii_speaking == "E" || q5ii_speaking == "F" || q5ii_speaking == "G" || q5ii_speaking == "H") && 
						(q5ii_listening == "C" || q5ii_listening == "D" || q5ii_listening == "E" || q5ii_listening == "F" || q5ii_listening == "G" || q5ii_listening == "H") && 
						(q5ii_reading == "C" || q5ii_reading == "D" || q5ii_reading == "E" || q5ii_reading == "F" || q5ii_reading == "G" || q5ii_reading == "H") && 
						(q5ii_writing == "C" || q5ii_writing == "D" || q5ii_writing == "E" || q5ii_writing == "F" || q5ii_writing == "G" || q5ii_writing == "H")
					){
						french_bonus = 50;
					}
					
				}
			}
		}
		
		
		bonus_factors += french_bonus;
				
		//Question 10 - Brother or sister in Canada
		var sibling_bonus = 0;
		
		if (q10i_answer == "B") {sibling_bonus = 15;}
		
		bonus_factors += sibling_bonus;
		if (bonus_factors > 600) { bonus_factors = 600 }
		subtotal = core_factors + spouse_factors + skill_factors;
		grandtotal = subtotal + bonus_factors;
		
		document.getElementById("totals").innerHTML = '<hr /><h3>Additional points (to a maximum of 600 points)</h3><p>Provincial nomination = ' + prov_nom_bonus + '</p><p>Job offer = ' + job_bonus + '</p><p>Study in Canada = ' + study_bonus + '</p><p>Sibling in Canada = ' + sibling_bonus + '</p><p>French-language skills = ' + french_bonus + '</p><p><strong>Subtotal Additional points</strong> = ' + bonus_factors + '</p><hr /><p><strong>Comprehensive Ranking System formula grand total</strong>&nbsp;= ' + grandtotal + '</p><div class="clearfix"></div>';

		
		document.getElementById("results").style.display = "block";
	});	