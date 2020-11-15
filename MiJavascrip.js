var menor = 9999999;
let array = [7,1,2,4,69,420];

function searchMenor() -> Int {
	for(i; i < array.count; i++) {
		if(menor > array[i]) {
			menor = array[i];
		}
	}
	return menor;
}


searchMenor();
