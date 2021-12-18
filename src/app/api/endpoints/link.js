

const BaseApi = require('../baseApi');

class Link extends BaseApi {
    
    async getSummary(url) {
        return this.get(url);
    }
}

module.exports = Link;