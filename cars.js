var xhr = new XMLHttpRequest();
var url = 'cars.xml';
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlText = xhr.responseText;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        var cars = xmlDoc.getElementsByTagName('car');

        var outputContainer = document.getElementById('carInfoContainer'); // Assuming you have a container element in your HTML with the id "carInfoContainer"

        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            var make = car.getElementsByTagName('make')[0].textContent;
            var model = car.getElementsByTagName('model')[0].textContent;
            var year = car.getElementsByTagName('year')[0].textContent;
            var color = car.getElementsByTagName('color')[0].textContent;
            var price = car.getElementsByTagName('price')[0].textContent;

            var carContainer = document.createElement('div');
            carContainer.classList.add('car-info');

            var carTitle = document.createElement('h3');
            carTitle.textContent = 'Car ' + (i + 1);

            var makePara = document.createElement('p');
            makePara.textContent = 'Make: ' + make;

            var modelPara = document.createElement('p');
            modelPara.textContent = 'Model: ' + model;

            var yearPara = document.createElement('p');
            yearPara.textContent = 'Year: ' + year;

            var colorPara = document.createElement('p');
            colorPara.textContent = 'Color: ' + color;

            var pricePara = document.createElement('p');
            pricePara.textContent = 'Price: ' + price;

            carContainer.appendChild(carTitle);
            carContainer.appendChild(makePara);
            carContainer.appendChild(modelPara);
            carContainer.appendChild(yearPara);
            carContainer.appendChild(colorPara);
            carContainer.appendChild(pricePara);

            outputContainer.appendChild(carContainer);
        }
    }
};
xhr.send();
