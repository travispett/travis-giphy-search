import axios from 'axios';

async function get(searchParams) {
  try {
    const response = await axios.get('/api/gifs', { params: { searchParams } });
    const { data, status } = response;

    return status === 200 ? data : new Error(status);
  } catch (e) {
    return new Error(e);
  }
}

export default { get };
