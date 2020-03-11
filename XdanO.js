var kata = "xoxoxooo";
var kataloop = "";
let hitungx = "";
let hitungo = "";

for(i=0; i<kata.length; i++){
	kataloop=kata[i];
	if(kataloop==="x"){
		hitungx+=1;
	}else{
		hitungo+=1;
	}
}

if (hitungx===hitungo) {
	console.log(true);
}else{
	console.log(false);
}