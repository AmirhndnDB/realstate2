import axios from "axios";

const options = {
  method: "GET",
  url: "https://trulia-real-estate-scraper.p.rapidapi.com/search/for_sale",
  params: {
    search_token: "<REQUIRED>",
    page: "1",
    listing: "<REQUIRED>",
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
