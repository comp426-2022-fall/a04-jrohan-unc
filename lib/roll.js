export function roll(sides, dice, rolls){
	let values = []
	
	for(let i = 0; i <= rolls-1; i++){
		let value = 0;
		
		for(let j = 0; j < dice; j++){
			value += choose(sides);
		}

		values[i] = value;
	}

	var results = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: values
	}

	return JSON.stringify(results);
}

function choose(sides){
	let random_Num = Math.floor(Math.random() * sides) + 1;

	return random_Num;
}