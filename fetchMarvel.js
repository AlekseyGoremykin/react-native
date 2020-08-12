import axios from 'axios';
import md5 from 'md5';

const apiUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '74d963c3e96866b4b1e33ad88c1abc07063f7375';
const publicKey = '0adfd59ac6f61ee5b3761c364910292d';

const fetchMarvel = (url, params) => {
  const date = new Date();
  const timestamp = date.toString();

  return axios.get(`${apiUrl}${url}`, {
    params: {
      ...params,
      ts: timestamp,
      apikey: publicKey,
      hash: md5(`${timestamp}${privateKey}${publicKey}`),
    },
  });
}

export default fetchMarvel;
