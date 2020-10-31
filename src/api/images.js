import Base from './base';
import { getToken } from '../utils/localstorage';
export default class Image extends Base {
  getImages(params) {
    return this.apiClient.get('images/', params);
  }

  downloadImage(hash, params) {
    return this.apiClient.get(`images/${hash}`, params);
  }

  async uploadImage(body) {
    const url = process.env.REACT_APP_API_PREFIX;
    const token = await getToken();
    console.log(token);

    return fetch(`${url}/images/add`, {
      method: 'POST',
      body,
      headers: {
        Authorization: token
      }
    })
      .then((response) => response.json().then((res) => res))
      .catch((err) => console.log(err));
  }
}
