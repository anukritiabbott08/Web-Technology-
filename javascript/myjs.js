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
	
	/* When the user clicks submit form, validate the email-id  */
	var contactForm = document.getElementById("contactForm");
	 if (contactForm !== null) { /*Check the variable is not null so it doesn't show an error in console for other pages */
		contactForm.onsubmit = function() {
			var x = document.forms["myForm"]["email"].value;
			var atpos = x.indexOf("@");
			var dotpos = x.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
				alert("Please enter a valid e-mail address");
				return false;
			}
			
			var y = document.forms["myForm"]["reason"].value;
			if(y == 'Select reason'){
				alert("Please select the Reason of Contact")
				return false;
			}
		};
	}
	
	/* To load the content json */
	window.onload = function() {
    var $select = $('#reasonOfContact');
		$.getJSON("javascript/reason.json", function(data) {
			for(var i=0; i<data['reasonOfContact'].length;i++){
				$select.append('<option id="'+ data['reasonOfContact'][i]['id']+'">'+ data['reasonOfContact'][i]['name']+'</option>' );
			}
		});
	}
});