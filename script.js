(function(){
	var timer = parseInt(document.getElementById("input").value);
	if(timer < 10)
		document.getElementById("decompte").innerHTML = "0"+timer+":00";
	else
		document.getElementById("decompte").innerHTML = timer+":00";
	var minuteur;
	var start = false;
	document.getElementById("plus").addEventListener("click", function(){
		document.getElementById("input").value = ++timer;
		document.getElementById("decompte").innerHTML = timer+":00";
	});
	document.getElementById("moins").addEventListener("click", function(){
		if(timer > 0){
			document.getElementById("input").value = --timer;
			document.getElementById("decompte").innerHTML = timer+":00";
		}
	});

	var decompte = function(){
		start = true;
		var compteur = document.getElementById("decompte").innerHTML.split(":");
		compteur[0] = parseInt(compteur[0]);
		compteur[1] = parseInt(compteur[1]);

		compteur[1]--;
		if(compteur[1]==-1){
			compteur[0]--;
			compteur[1] = 59;
		}
		if(compteur[0]<10){
			compteur[0] = "0"+compteur[0];
		}
		if(compteur[1]<10){
			compteur[1] = "0"+compteur[1];
		}
		var rendu = compteur.join(":");
		document.getElementById("decompte").innerHTML = rendu;
		if(rendu != "00:00")
		{
			minuteur = setTimeout(decompte, 1000);
		}
		else{
			alert("fini");
		}
	};

	document.getElementById("start").addEventListener("click", decompte);
	document.getElementById("pause").addEventListener("click", function(){
		if(start){
			clearTimeout(minuteur);
		} else {
			minuteur = setTimeout(decompte, 1000);
		}
	});
	document.getElementById("reset").addEventListener("click", function(){
		if(typeof minuteur == "number"){
			clearTimeout(minuteur);
			if(timer < 10)
				document.getElementById("decompte").innerHTML = "0"+timer+":00";
			else
				document.getElementById("decompte").innerHTML = timer+":00";
		} 
	});
})();