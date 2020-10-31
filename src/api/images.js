import Base from './base';
export default class Image extends Base {
  getImages(params) {
    return this.apiClient.get('images/', params);
  }

  downloadImage(hash, params) {
    return this.apiClient.get(`images/${hash}`, params);
  }

  uploadImage(body) {
    const url = process.env.REACT_APP_API_PREFIX;

    return fetch(`${url}/images/add`, {
      method: 'POST',
      body,
    })
      .then((response) => response.json().then((res) => res))
      .catch((err) => console.log(err));
  }
}
