$(document).ready(function(){

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("weather");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	$( "#weather" ).click(function(){
		modal.style.display = "block";			
	})

	// When the user clicks on <span> (x), close the modal
	$("#close").click(function(){
		modal.style.display = "none";
		location.reload();
	})

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			location.reload();
		}
	}

	//To get the weather forecast of desired city
	var city = document.getElementById("submit");
		$( "#submit" ).click(function(){
		
		//To validate data is entered in input field
		var city = document.getElementById("city").value;
			if(city==""||city==null)
			{
				alert ('Please enter city name');
				return false;
			}else{		
				// To call yahoo weather api
				$.ajax({
					url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+city+'%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', success: function(json_weather){
						
						//To validate the entered city name
						if(json_weather.query.results.channel.title=='Yahoo! Weather - Illinois, US'){
							alert('Please enter a valid city name');
						}else{
							$('<h1>').text(json_weather.query.results.channel.title ).appendTo('#main');
							$('<h2>').text('Date: ').appendTo('#main');
							$('#main').append(json_weather.query.results.channel.item.condition.date); 
							$('<h2>').text('Temperature: ').appendTo('#main');    
							$('#main').append(json_weather.query.results.channel.item.condition.temp);
							$('<h2>').text('Wind Chill: ').appendTo('#main');
							$('#main').append(json_weather.query.results.channel.wind.chill);
							document.getElementById('submit').style.display = 'none';
						}
					}
				});	
			
			}
		})
});