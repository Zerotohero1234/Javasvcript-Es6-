function toCelsius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2)+ "C"
}

function display(elementId,value)
{
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}

function toFahrenheit(celsius)
{
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2)+"F"
}

function displayf(id,value)
{
    document.getElementById(id).innerHTML = value
}

function toCelsiusProgram(val)
{
    alert(toCelsius(val))
}

function toFarenheitProgram(val)
{
    alert(toFahrenheit(val))
}