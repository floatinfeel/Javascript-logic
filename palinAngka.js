let angka =2790;
let ABalik = angka.toString();
let balik = "";

while(true){
		ABalik = angka.toString();
		balik = "";
	for(let i= ABalik.length-1; i>=0; i--){
		balik+= ABalik[i];
	}
		if(angka==balik){
			break;
		}
	angka++;
}



console.log(balik);