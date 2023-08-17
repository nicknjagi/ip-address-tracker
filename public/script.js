const URL =
  'https://geo.ipify.org/api/v2/country?apiKey='
const api_key = 'at_3j1dMHlZUuHpeyWwI9sM9o20Bs8aC'
let countryData = ''

const getIPData = async (url, key) => {
  try {
    const response = await fetch(`${url}${key}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
}

const getData = async () => {
  const data = await getIPData(URL,api_key)
  countryData = await data
}
// getData()
console.log(
  countryData
);

var map = L.map('map').setView([51.505, -0.09], 13)




