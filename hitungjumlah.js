let kalimat = "      I can   see  you  ";
let hitung = 1;


for(let i=0; i<kalimat.length; i++){
	kata=kalimat[i];

	if(kata == " "){
		if(kalimat[i-1]!= " "){
			hitung+=1;
		}
	}
}

if(kalimat[0]== " "){
		hitung-=1;
	}

if(kalimat[kalimat.length-1]==" "){
	hitung-=1;
}

console.log(hitung);
