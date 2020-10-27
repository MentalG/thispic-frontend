import Base from './base';
export default class Auth extends Base {
    registration(params) {
        return this.apiClient.post('auth/create', params);
    }
}
