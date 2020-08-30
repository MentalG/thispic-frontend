import Base from './base';
export default class Image extends Base {
    getImages(params) {
        return this.apiClient.get('images/', params);
    }
}
