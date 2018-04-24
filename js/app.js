// hide the error message
$("p.error").hide();

// make numbers visible in input screen
var input_string = "",
	calculate_string = "",
	total = 0,
	numbers = "";

$("button").on("click", function(e) {
	if (
		e.currentTarget.textContent.toLowerCase() !== "clear" &&
		e.currentTarget.textContent !== "="
	) {
		if (e.currentTarget.textContent === "x") {
			input_string += "*";
		} else {
			input_string += e.currentTarget.textContent;
		}
	}

	// implement clear
	if ($(e.currentTarget).hasClass("clear")) {
		$(".input-screen").text(0);
		$(".calculator-screen").text(0);
		input_string = "";
	}

	// calculate using eval()
	if (
		input_string[input_string.length - 1] !== "+" &&
		input_string[input_string.length - 1] !== "-" &&
		input_string[input_string.length - 1] !== "*" &&
		input_string[input_string.length - 1] !== "÷"
	) {
		$(".calculator-screen").text(eval(input_string));
	}

	// FIX THE CLEAR FUNCTOIN ERROR TYPO

	if (
		isNaN(parseInt(input_string[input_string.length - 1])) &&
		isNaN(parseInt(input_string[input_string.length - 2])) &&
		e.currentTarget.textContent.toLowerCase() !== "clear" && 
		e.currentTarget.textContent.toLowerCase() !== "="
	) {
		console.log(e.currentTarget.textContent);
		console.log("error");
		$("p.error")
			.fadeIn()
			.delay(300)
			.fadeOut();
	}

	// if = is pressed, then, clear input-screen
	if ($(e.currentTarget).hasClass("calculate")) {
		$(".input-screen").text(" ");
		input_string = "";
	}

	$(".input-screen").text(input_string);
});
