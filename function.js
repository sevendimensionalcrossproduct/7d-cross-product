function seven_dimensional_cross_product(x, y) {
    var result = [0, 0, 0, 0, 0, 0, 0];
    var _loop_1 = function (i) {
        var START = function (n) { return (i + n) % 7; };
        result[START(1)] =
            x[START(2)] * y[START(4)] -
                x[START(4)] * y[START(2)] +
                x[START(3)] * y[START(7)] -
                x[START(7)] * y[START(3)] +
                x[START(5)] * y[START(6)] -
                x[START(6)] * y[START(5)];
    };
    for (var i = -1; i < 6; i++) {
        _loop_1(i);
    }
    return result;
}

function calculate_value(){
	const x_values = Array.from(document.querySelectorAll('#x input')).map(input => parseFloat(input.value) || 0);
	const y_values = Array.from(document.querySelectorAll('#y input')).map(input => parseFloat(input.value) || 0);

	const result = seven_dimensional_cross_product(x_values, y_values);

	return result;
}


function update_values(){
	const values = calculate_value();
	const output_elements = Array.from(document.querySelectorAll('.screen p'));

	const animated = document.querySelector('.output');
	const animatedElements = document.querySelectorAll('.output');

	const butt3 = document.getElementById('butt');

	butt3.classList.remove('buttAnimate');
	void butt3.offsetWidth;
	butt3.classList.add('buttAnimate');

	animatedElements.forEach((animated) => {
        	animated.classList.remove('output');
        	void animated.offsetWidth;
        	animated.classList.add('output');
   	 });

	
	for (var i = 0; i < 7; i++) {
		if (values[i].toString().length > 13){
			output_elements[i].textContent = "Too Long!!";
		} else {
		output_elements[i].textContent = values[i];
		}
	}
}


function reset() {
  const erasables = document.getElementsByClassName('glass');
  for (let j = 0; j < erasables.length; j++) {
    const inputs = erasables[j].getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
}


document.querySelector('#button').addEventListener('click', update_values);
document.querySelector('#reset').addEventListener('click', reset);
