/*
PSEUDOCODE

	store angka
	set 'angka' with random value, range between 1-5
	switch angka
		if angka equals to 1 
			display "coba lagi ya"
		if angka equals to 2
			display "selamat kamu mendapatkan kupon sebanyak 5"
		if angka equals to 3
			display "selamat kamu mendapatkan kupon sebanyak 15"
		if angka equals to 4
			display "selamat kamu mendapatkan kupon sebanyak 50"
		if angka equals to 5
			display "WOW, kamu menang jackpot! Selamat!!"

*/

var angka = Math.floor((Math.random()*5)+1);
switch(angka){
	case 1:
		console.log("coba lagi ya");
		break;
	case 2:
		console.log("selamat kamu mendapatkan kupon sebanyak 5");
		break;
	case 3:
		console.log("selamat kamu mendapatkan kupon sebanyak 15");
		break;
	case 4:
		console.log("selamat kamu mendapatkan kupon sebanyak 50");
		break;
	case 5:
		console.log("WOW, kamu menang jackpot! Selamat!!");
		break;
}


