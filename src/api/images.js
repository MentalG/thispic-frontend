import Base from './base';
export default class Image extends Base {
    getImages(params) {
        return this.apiClient.get('images/', params);
    }

    downloadImage(hash, params) {
        return this.apiClient.get(`images/${hash}`, params);
    }

    uploadImage(body) {
        return this.apiClient.post(`images/add`, body);
    }
}
