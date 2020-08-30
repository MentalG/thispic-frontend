import ApiClient from './apiClient'
import Images from './images'

export default function ({ apiPrefix, isServer = false } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required')
    }
    const api = new ApiClient({ prefix: apiPrefix, isServer })

    return {
        apiClient   : api,
        images       : new Images({ apiClient: api })
    }
}
