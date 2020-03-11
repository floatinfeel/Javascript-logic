var angka = 681573;
var kata = angka.toString();
var katabaru;
var pembanding=0;


for(var i=0; i<kata.length-1; i++){
	katabaru = kata[i]+kata[i+1];
	


	if(katabaru>pembanding){
		pembanding= katabaru;
	}
}

console.log(pembanding);










	






	