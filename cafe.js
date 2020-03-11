/* Pseudocode
store name, age, money
set 'name' with any value
set 'age' with any value
set 'money' with any value
if'name' equals true, do
	if 'age' less then,do
		display "Hanya boleh pesan juice"
		if 'money' less then 50000
			display "Uang tidak cukup. Anda harus pulang"
		else
			display "anda bisa pesan minum. " + "Sisa uang anda: "+ ('money'-50000)
	else
		display "Hanya boleh pesan Anggur"
		if 'money' <300000
			display "Uang tidak cukup. Anda harus pulang"
		else
			display "Anda bisa pesan minum. "+ "Sisa uuang anda: "+ ('money'-300000)
else
	display "Anda tidak boleh masuk!"
	
*/
var name = 'Dandi';
var age = 20;
var money = 100000;

if(name){
	if (age<17) {
	console.log("Hanya boleh pesan juice");
		if(money<50000){
			console.log("Uang tidak cukup. Anda harus pulang.");
		}else{
			console.log("Anda bisa pesan minum."+" Sisa uang anda: "+ (money-50000));
		}
	}else{
		console.log("Hanya boleh pesan Anggur");
		if(money<300000){
			console.log("Uang tidak cukup. Anda harus pulang.");
		}else{
			console.log("Anda bisa pesan minum."+" Sisa uang anda: "+ (money-300000));
		}
	}
	
}else{
	console.log("Anda tidak boleh masuk!");
}

