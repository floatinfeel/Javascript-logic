var kata = "i love javascript";
var rubah;
var kataUbah="";
var a=1;





for(var i=0; i<kata.length; i++){
	
	rubah = kata[i];
		
		if (rubah== 'a' || rubah== 'i' || rubah== 'u' || rubah== 'e' || rubah== 'o' ) {
			rubah='$';
		}	
		
			kataUbah += rubah;
			
}

console.log(kataUbah);	




