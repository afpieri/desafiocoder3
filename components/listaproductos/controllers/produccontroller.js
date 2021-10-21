let handlerDocuments = require("../utils/handlercontroller");

class ProducController {

    constructor(){

    }

    async getAll(){
        try {
            return await JSON.parse(handlerDocuments.readDocument())
        } catch (error) {
            console.log(error);
        }

    }

    async getSummary(){
        
    }
    async updateProdu(){
        
    }
    async createpProdu(){
        
    }


}

module.exports = new produccontroller();