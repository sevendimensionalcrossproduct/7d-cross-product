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
	const button = document.getElementById('butt');
	button.classList.remove('buttAnimate');
	void button.offsetWidth;
	button.classList.add('buttAnimate');
	
	const animatedElements = document.querySelectorAll('.output');
	animatedElements.forEach((element) => {
        	element.classList.remove('output');
        	void element.offsetWidth;
        	element.classList.add('output');
   	 });

	const values = calculate_value();
	const output_elements = Array.from(document.querySelectorAll('.screen p'));
	for (var i = 0; i < 7; i++) {
		output_elements[i].textContent = (values[i].toString().length > 13 ? "Too Long!" : values[i]);
	}
}


function reset() {
	const inputs = document.querySelectorAll('input');
  	inputs.forEach((entry) => {
		entry.value = '';	
  	});
}


document.querySelector('#button').addEventListener('click', update_values);
document.querySelector('#reset').addEventListener('click', reset);
