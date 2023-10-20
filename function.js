const button = document.getElementById('butt');
const animatedElements = document.querySelectorAll('.output');
const inputs = document.querySelectorAll('input');
const output_elements = Array.from(document.querySelectorAll('.screen p'));


function seven_dimensional_cross_product() {
    const x_values = Array.from(document.querySelectorAll('#x input')).map(input => parseFloat(input.value) || 0);
    const y_values = Array.from(document.querySelectorAll('#y input')).map(input => parseFloat(input.value) || 0);

    const result = [0, 0, 0, 0, 0, 0, 0];

    for (var i = -1; i < 6; i++) {
        var START = function (n) { return (i + n) % 7; };
        result[START(1)] =
            x_values[START(2)] * y_values[START(4)] -
            x_values[START(4)] * y_values[START(2)] +
            x_values[START(3)] * y_values[START(7)] -
            x_values[START(7)] * y_values[START(3)] +
            x_values[START(5)] * y_values[START(6)] -
            x_values[START(6)] * y_values[START(5)];
    }

    return result;
}


function update_values(){
	button.classList.remove('buttAnimate');
	void button.offsetWidth;
	button.classList.add('buttAnimate');
	
	animatedElements.forEach((element) => {
        	element.classList.remove('output');
        	void element.offsetWidth;
        	element.classList.add('output');
   	 });

	const values = seven_dimensional_cross_product();
	for (var i = 0; i < 7; i++) {
		output_elements[i].textContent = (values[i].toString().length > 13 ? "Too Long!" : values[i]);
	}
}


function reset() {
  	inputs.forEach((entry) => {
		entry.value = '';	
  	});
}


document.querySelector('#button').addEventListener('click', update_values);
document.querySelector('#reset').addEventListener('click', reset);
