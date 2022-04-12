const loadCountries = () => {
    fetch( 'https://restcountries.com/v3.1/all' )
        .then( res => res.json() )
        .then( data => displayCountries( data ) );
};

const displayCountries = countries => {
    // console.log( countries[ 0 ] );
    const countriesHTML = countries.map( country => getCountriesHTML( country ) );
    const container = document.getElementById( 'countries' );
    container.innerHTML = countriesHTML.join( ' ' );
};

//Step-3
const getCountriesHTML = ( { name, flags, capital, area } ) => {
    return `
    <div class="country">
        <h2>${ name.common }</h2>
        <img src="${ flags.png }">
        <h3>City: ${ capital }</h3>
        <p>Area: ${ area } SFT</p>
    </div>
    `;
};

//Step-2
// const getCountriesHTML = country => {
//     const { name, flags, capital, area } = country;
//     return `
//     <div class="country">
//         <h2>${ name.common }</h2>
//         <img src="${ flags.png }">
//         <h3>City: ${ capital }</h3>
//         <p>Area: ${ area } SFT</p>
//     </div>
//     `;
// };


//Ster-1
// const getCountriesHTML = country => {
//     return `
//     <div class="country">
//         <h2>${ country.name.common }</h2>
//         <img src="${ country.flags.png }">
//         <h3>City: ${ country.capital }</h3>
//     </div>
//     `;
// };

loadCountries();