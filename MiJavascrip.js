var menoor = 9999999;
let array = [7,1,2,4,69,420,5,6];

function searchMenor() -> Int {
	for(i; i < array.count; i++) {
		if(menoor > array[i]) {
			menoor = array[i];
		}
	}

	return menoor+2;
}

//Hola Rey :)
searchMenor();
