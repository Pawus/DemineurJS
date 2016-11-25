function Demineur(length, weigth){
	this.length = length
	this.weigth = weigth
	this.table = new Array(length)
	for (var i = 0; i < length; i++){
		this.table[i] = new Array(weigth)
		for (var j = 0; j < weigth; j++){
			if (Math.random() > 0.7)
				this.table[i][j] = true
			else
				this.table[i][j] = false
		}
	}
}

function displayDemineur(demi){
	var divDemi = document.getElementById("demineur")

	for (var i = 0; i<demi.length; i++){
		var divL = document.createElement("tr")
		divL.setAttribute('id', "tab"+i)
		divDemi.appendChild(divL)
		for (var j = 0; j < demi.weigth; j++){
			var divW = document.createElement("th")
			divW.setAttribute('id', "tab"+i+"-"+j)
			//divW.append(demi.table[i][j]) // Permet d'afficher la valeur
			var check = document.createElement("input")
			check.setAttribute('type', 'checkbox')
			check.setAttribute('checked', "checked")
			check.setAttribute('id', i+"-"+j)
			check.addEventListener('click', function(){
				id = this.id.split("-")
				checkMine(demi, id[0], id[1])
				})
			divW.appendChild(check)
			divL.appendChild(divW)

		}
	}

	var divResult = document.createElement("div")
	divResult.setAttribute("id", "result")
	divDemi.appendChild(divResult)
}

function checkMine(demi, l, w){
	if (demi.table[l][w]) {
		// Tout afficher
		var divResult = document.getElementById("result")
		console.log(divResult)
		divResult.append("Perdu !")
		replace(l, w, 'X')

	}
	/*
	9 9 9 
	9 9 9
	9 9 9
	*/
	else {
		var cptMine = 0

		console.log("Click", l, w)
		if(l > 0 && demi.table[l-1][w]){
			cptMine++
			if(w > 0 && demi.table[l-1][w-1])
				cptMine++
		}
		if(l < demi.length -1 && demi.table[l- -1][w]){
			cptMine++
			if(w < demi.weigth -1 && demi.table[l- -1][w- -1])
				cptMine++
		}
		if(w > 0 && demi.table[l][w-1]){
			cptMine++
			if(l > 0 && demi.table[l-1][w-1])
				cptMine++
		}
		if(w < demi.weigth -1 && demi.table[l][w- -1]){
			console.log('')
			cptMine++
			if(l < demi.length -1 && demi.table[l- -1][w- -1])
				cptMine++
		}
		
		console.log(cptMine)
		replace(l, w, cptMine)
	}
}

function replace(l, w, cptMine){
	var divReplace = document.getElementById(l+"-"+w)
	console.log(divReplace)
	divReplace.replaceWith(cptMine)

}
var demi = new Demineur(10, 10)

displayDemineur(demi)

console.log(demi)

