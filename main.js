const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'd3b245c49e4b31ae58bf2371ebe293d7';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F3222%2F3222800.png&tbnid=p6uzyh6E2XfSkM&vet=12ahUKEwi06Lqbs5aAAxUHm2MGHX9KDOkQMygMegUIARD1AQ..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fclear-sky_3222800&docid=KNLOEw5m6GkBzM&w=512&h=512&q=clear%20in%20weather%20img&ved=2ahUKEwi06Lqbs5aAAxUHm2MGHX9KDOkQMygMegUIARD1AQ';
                    break;

                case 'Rain':
                    image.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Fweather%2Fweather-png-photo-hd-8.png&tbnid=37lKWbuJPbAS2M&vet=12ahUKEwi06Lqbs5aAAxUHm2MGHX9KDOkQMygQegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.transparentpng.com%2Fcats%2Fweather-1754.html&docid=aehZQR9Zt9mZKM&w=400&h=400&q=clear%20in%20weather%20img&ved=2ahUKEwi06Lqbs5aAAxUHm2MGHX9KDOkQMygQegUIARD9AQ';
                    break;

                case 'Snow':
                    image.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2DCNBB8%2Fsnow-cloud-for-snowy-and-overcast-weather-symbol-line-art-vector-icon-2DCNBB8.jpg&tbnid=vCafGRyYwc__aM&vet=12ahUKEwiHwY_Ds5aAAxWiz6ACHefxCSsQMygBegUIARDLAQ..i&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fsnow-symbol-weather-forecast.html&docid=o524PiGq-A7DBM&w=1300&h=1177&q=snow%20in%20weather%20img&ved=2ahUKEwiHwY_Ds5aAAxWiz6ACHefxCSsQMygBegUIARDLAQ';
                    break;

                case 'Clouds':
                    image.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F59%2F60%2Fcloud-rain-weather-isolated-icon-vector-24625960.jpg&tbnid=oIwF8CFMUNbV5M&vet=12ahUKEwjMs5DZs5aAAxVDoekKHYJwCkMQMygKegUIARD6AQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcloud-rain-weather-isolated-icon-vector-24625960&docid=ydoTC1-3wXVFEM&w=1000&h=1080&q=clouds%20in%20weather%20img&ved=2ahUKEwjMs5DZs5aAAxVDoekKHYJwCkMQMygKegUIARD6AQ';
                    break;

                case 'Haze':
                    image.src = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F4151%2F4151022.png&tbnid=Vu0sybiA9Sw2iM&vet=12ahUKEwjEs7vxs5aAAxVCkWMGHSIEBDIQMygIegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fhaze_4151022&docid=E5xNsoXLy40RaM&w=512&h=512&q=haze%20in%20weather%20img&ved=2ahUKEwjEs7vxs5aAAxVCkWMGHSIEBDIQMygIegUIARDjAQ';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});