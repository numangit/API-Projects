//function to get and load countries data
const loadCountries = () => {
    //get
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        //function called here to display
        .then(data => displayCountries(data));
}

//function to display all country details
const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;//to add a button onclick event inside innerHTMl, use single quotation if the paramter value is string.
        countriesContainer.appendChild(countryDiv);
    })
}
// function load more details about the country on button click
const loadCountryDetail = (code) => {
    // dynamic link
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
//function to display the selected country flag and name
const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `
}

loadCountries();