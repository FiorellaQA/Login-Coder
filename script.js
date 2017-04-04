document.getElementById("js-fomr1").addEventListener("submit",function(e){
	e.preventDefault();
	
	document.getElementsByClassName("wrapper")[0].classList.add("form-success");
	document.getElementsByClassName("form")[0].style.display = "none";
	});
