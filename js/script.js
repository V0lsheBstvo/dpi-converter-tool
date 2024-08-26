function convert() {
	const currentDPI = parseFloat(document.getElementById('currentDPI').value)
	const currentSensitivity = parseFloat(
		document.getElementById('currentSensitivity').value
	)
	const newDPI = parseFloat(document.getElementById('newDPI').value)

	if (isNaN(currentDPI) || isNaN(currentSensitivity) || isNaN(newDPI)) {
		document.getElementById('result').innerText =
			'Please enter valid numbers for Current DPI, Current Sensitivity, and New DPI.'
		return
	}

	// Расчет новой чувствительности
	const newSensitivity = currentSensitivity * (currentDPI / newDPI)

	document.getElementById(
		'result'
	).innerText = `Converted Sensitivity for ${newDPI} DPI: ${newSensitivity.toFixed(
		2
	)}`
}
