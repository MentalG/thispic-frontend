import Base from './base';
export default class Image extends Base {
  getImages(params) {
    return this.apiClient.get('images/', params);
  }

  downloadImage(hash, params) {
    return this.apiClient.get(`images/${hash}`, params);
  }

  uploadImage(body) {
    return fetch('http://localhost:5000/images/add', {
      method: 'POST',
      body,
    })
      .then((response) => response.json().then((res) => res))
      .catch((err) => console.log(err));
  }
}
