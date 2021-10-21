let handlerDocuments = require("../utils/resources/handlercontroller");

class produccontroller {

    constructor(){

    }

    async getAll(){
        try {
            return JSON.parse(await handlerDocuments.readDocument());
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