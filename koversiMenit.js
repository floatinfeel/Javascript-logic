let detik =63;
let bagi = 60;
let menit = "";
let menitD = "";
let hasil = "";


if(detik>70){
	menit = Math.floor(detik/bagi);
	menitD = detik%bagi;
	hasil=menit+":"+menitD;
	console.log(hasil);
}else if(detik===bagi){
	console.log(1+":00");
}else if(detik>bagi && detik<70){
	menit = Math.floor(detik/bagi);
	menitD = detik%bagi;
	hasil = menit+":0"+menitD;
	console.log(hasil);
}else{
	console.log(0+":"+detik);
}