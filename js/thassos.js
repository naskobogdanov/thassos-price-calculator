var fullPricePerPerson

function calculatePrice() {
    var numberOfPassengers = parseFloat($( "#Passengers" ).val()),
        fuelConsumption = parseFloat($( "#Consumption" ).val().replace(',', '.'))/100,
        fuelPrice = parseFloat($( "#FuelPrice" ).val().replace(',', '.')),
        distanceFromSofia = 800,
        distanceFromVelingrad = 650,
        distance = distanceFromSofia,
        ferryManBothWays = 3.5 * 1.95583 * 2,
        ferryCarBothWays = 20 * 1.95583 * 2,
        numberOfNights = 3,
        perPerson = 4.5 * 1.95583 * numberOfNights,
        perCar = 4.5 * 1.95583 * numberOfNights,
        perTent = 6 * 1.95583 * numberOfNights;

    if (numberOfPassengers > 2) {
        perTent = perTent * 2
    }

    if ($("#startingPoint").val() === "Velingrad" || $("#startingPoint").val() === "Велинград") {
        distance = distanceFromVelingrad;
    }

    var fullPrice  = ferryCarBothWays +
        ferryManBothWays * numberOfPassengers +
        distance * fuelConsumption * fuelPrice +
        perPerson * numberOfPassengers +
        perCar +
        perTent;

    fullPricePerPerson = (fullPrice / numberOfPassengers).toFixed(2);

    if (isNaN(numberOfPassengers) || isNaN(fuelConsumption) || isNaN(fuelPrice)) {
        $ ("#error").css('display', 'block');
        $ ("#result").css('display', 'none');
    } else {
        $ ("#result").css('display', 'block');
        $ ("#error").css('display', 'none');
        if (isEnglish) {
            $('#pricePerPerson').html("Price per person: " + fullPricePerPerson + " lv.");
        } else {
            $('#pricePerPerson').html("Цена за човек: " + fullPricePerPerson + " лв.");
        }

    }
}





