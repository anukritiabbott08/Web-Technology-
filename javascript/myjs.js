$(document).ready(function(){

	/*Function to open index page on home tab*/
	$( "#home" ).click(function() {
		document.location.href="index.html";
	});
	
	/*Function to open ContactUs page on Contact Me tab*/
	$( "#contact" ).click(function() {
		document.location.href="contactUs.html";
	});
	
	/*Function to open resume page on resume tab*/
	$( "#resume" ).click(function() {
		document.location.href="resume.html";
	});
	
	/* Get the modal */
	var modal = document.getElementById('myModal');

	/* Get the button that opens the modal */
	var downloadButton = document.getElementById("download");
	if (downloadButton !== null) {/*Check the variable is not null so it doesn't show an error in console for other pages */
		/* Get the <span> element that closes the modal */
		var span = document.getElementsByClassName("close")[0];

		/* When the user clicks the button, open the modal  */
		downloadButton.onclick = function() {
			modal.style.display = "block";
		}

		/* When the user clicks on <span> (x), close the modal */
		span.onclick = function() {
			modal.style.display = "none";
		}

		/* When the user clicks anywhere outside of the modal, close it */
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		
		/* When the user drops the draggable box in droppable box */
		$("#draggable").draggable();
		$("#droppable").droppable({
			drop: function() {
				window.location.href = 'Resume_AnukritiAbbott.pdf';
			}
		});
	}
});