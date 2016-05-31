if (!localStorage.getItem('isEnglish')) {
    localStorage.setItem('isEnglish','true');
}

var isEnglish = localStorage.getItem('isEnglish');

if (localStorage.getItem('isEnglish') === 'true') {
    english();
} else {
    bulgarian();
}

$(document).ready(function () {
    $('#en').click(english);
    $('#bg').click(bulgarian);
});


function english() {
    $('#headerTitle').text("Thassos Calc");
    $('#required').text("Required Field");
    $('#Passengers').attr("placeholder", "Enter Car Passengers Count");
    $('#Consumption').attr("placeholder", "Enter Fuel Consumption Per 100km");
    $('#FuelPrice').attr("placeholder", "Enter Fuel Price in BGN");
    $('#startingPointTitle').text("Starting point:");
    $('#sofia').text("Sofia");
    $('#velingrad').text("Velingrad");
    $('#calculateButton').text("Calculate");
    $('#errorMessage').text("Error! Please check all input values.");
    $('#approximatePrice').text("This is an approximate price that includes travel costs and stay for three nights at camping Pefkari.");
    $('#pricePerPerson').html("Price per person: " + fullPricePerPerson + " lv. (€ "+ fullPricePerPersonEuro +")");
    localStorage.setItem('isEnglish','true');
}


function bulgarian() {
    $('#headerTitle').text("Елка \"Tасос\"");
    $('#required').text("Задължително Поле");
    $('#Passengers').attr("placeholder", "Въведете брой пътници");
    $('#Consumption').attr("placeholder", "Въведете разход на гориво за 100 км");
    $('#FuelPrice').attr("placeholder", "Въведете цена на горивото в лева");
    $('#startingPointTitle').text("Стартова точка:");
    $('#sofia').text("София");
    $('#velingrad').text("Велинград");
    $('#calculateButton').text("Изчисли");
    $('#errorMessage').text("Грешка! Моял проверете всички входни полета.");
    $('#approximatePrice').text("Това е приблизително изчислена цена, която включва пътните разходи и три нощувки на къмпинг Пефкари.");
    $('#pricePerPerson').html("Цена за човек: " + fullPricePerPerson + " лв. (€ "+ fullPricePerPersonEuro +")");
    localStorage.setItem('isEnglish','false');
}