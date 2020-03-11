var input = 5;
var cetak = "";
var hitung = 1;


for(var i=1; i<=input; i++){
	
	//reset hasil outuput
	cetak = "";

	for(j=1; j<=input-i; j++){
		cetak+=" ";
	}

	for(k=1; k<=hitung; k++){
		if(k%2==0){
			cetak+="o";
		}else{
			cetak+="x";
		}
	}

	console.log(cetak);
	hitung+=2;
}