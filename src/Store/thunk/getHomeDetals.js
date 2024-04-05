import axios from "axios";

const options = {
  method: "GET",
  url: "https://trulia-real-estate-scraper.p.rapidapi.com/homes/details_by_url",
  params: {
    url: "https://www.trulia.com/p/az/paradise-valley/9316-n-58th-st-paradise-valley-az-85253--2113546226",
  },
  headers: {
    "X-RapidAPI-Key": "8d59fce8acmshba1ffed0f630742p18a83ajsn9447ef14669b",
    "X-RapidAPI-Host": "trulia-real-estate-scraper.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
