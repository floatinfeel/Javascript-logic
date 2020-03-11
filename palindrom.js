let kata = "   gempar";
let balik = "";
let tampung = "";
let tampil= "";
let angka= 0;

for(let i=kata.length-1; i>=0; i--){
	
	tampung+=kata[i];
	balik+=kata[angka];
	
	if(tampung!=balik){
		continue;
	}
	angka++;
	
	
}

if(tampung==balik){
	tampil=true;
}else{
	tampil=false;
}

console.log(tampil);

	


