import Base from './base';
export default class Image extends Base {
    getImages(params) {
        console.log(`images/${params}`);
        return this.apiClient.get('images/', params);
    }
}
