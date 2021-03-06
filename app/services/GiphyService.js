const axios = require('axios');

const giphyApiBase = 'http://api.giphy.com/v1';
const giphyApiKey = process.env.GIPHY_API_KEY || '';

const globalApiOptions = {
  api_key: giphyApiKey,
  rating: 'pg',
  limit: 3
};

async function search(query) {
  try {
    const params = Object.assign(globalApiOptions, { q: query });
    const response = await axios.get(`${giphyApiBase}/gifs/search`, { params });
    const { data, meta } = response.data;

    return meta.status === 200 ? data : new Error(meta.message);
  } catch (e) {
    return new Error(e);
  }
}

module.exports = { search };
