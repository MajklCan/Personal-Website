function spin(){

	fetch('http://localhost:3030/campaign/abc123')
  		.then(response => response.json())
  		.then(data => console.log(data));
	var x = 1024; //min value
	var y = 9999; // max value

	var deg2 = Math.floor(Math.random() * (x - y)) + y;
  var deg =3090;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
      var element2 = document.getElementsByClassName('alert-result')[0];
	element2.classList.remove('d-none');
	}, 5000); 
  

}
