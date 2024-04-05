import axios from "axios";

const options = {
  method: "GET",
  url: "https://trulia-real-estate-scraper.p.rapidapi.com/search/token",
  params: {
    search_type: "<REQUIRED>",
    place: "Scottsdale",
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
