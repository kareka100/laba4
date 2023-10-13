const apiKey = '4822e26258a831b9213879b0c8fd768a';
const cityAstana = 'Astana';
const cityMoscow = 'Moscow';
const units = 'metric'; // Едини

const getEbyan = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityAstana}&units=${units}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Погода в ${cityAstana}:`);
      console.log(`Температура: ${data.main.temp}°C`);
      console.log(`Погодные условия: ${data.weather[0].description}`);
      document.querySelector('#data').innerHTML = `<h1>Погода в Астане</h1> <br/> <h2>Температура:${data.main.temp}<br/><h2>Погодные условия: ${data.weather[0].description}</h2>`
    })
    .catch(error => {
      console.error('Произошла ошибка при получении погоды для Астаны:', error);
    });
  
}