function Generate() {

	  
	  var text = "<p class=\"text-center align-middle\">";
	  
	  var x;
	  x = document.getElementById("a");
	  text += "<span class=\"text-uppercase font-weight-bolder\" style=\"font-size: 200; font-weight :bold; \" >" + x.value + "</span>" +" <br> <br>";
	  x = document.getElementById("B");
	  text += x.value + "<br><br>";
	  x = document.getElementById("C");
	  text += x.value + "<br>";
	  x = document.getElementById("D");
	  text += x.value + "<br>";
	  x = document.getElementById("E");
	  text += x.value + "<br>";
	  x = document.getElementById("F");
	  text += x.value + "<br>";

	  
	  document.getElementById("demo").innerHTML = text + "</p>";
}