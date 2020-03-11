let kata= 29;
let tampil = "";

if(typeof(kata)=="string"){
	if(kata===""){
		tampil='invalid data';
	}else{
		tampil=`username ${kata}`;
	}
}else if(typeof(kata)=="number"){
	if(!kata){
		tampil='invalid data';
	}else{
		tampil=`age: ${kata}`;
	}
}else if(typeof(kata)=="boolean"){
	if(kata){
		tampil= 'thank you for agreeing';
	}else{
		tampil= 'cannot proceed without agreement';
	}
}else{
	tampil = 'invalid data';
}

console.log(tampil);

