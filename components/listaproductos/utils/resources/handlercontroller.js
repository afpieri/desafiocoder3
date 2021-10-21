const { error } = require('console');
const fs = require ('fs');
const path = require ('path');
class handlerDocuments{
    constructor(){
        this.absoluteroute = path.resolve(__dirname, 'resources', 'product.json');
}

async readDocument(){

    try { return await fs.promises.readFile(`${this.absoluteroute}`, 'utf-8');

    } catch(error){
        console.log("un error en readDocument", error);
    }
}    
async writeDocument(){

    try { return await fs.promises.writeFile(`${this.absoluteroute}`, 'algo nuevo');

    } catch (error){
        console.log("un error en writeDocument" );
    }
}    
async appendDocument(){

    try { return await fs.promises.appendFile(`${this.absoluteroute}`, 'algo nuevo');

    } catch (error){
        console.log("un error en appendDocument");
    }
}    
async deleteDocument(){

    try { return await fs.promises.deleteFile(`${this.absoluteroute}`, 'algo nuevo');

    } catch (error){
        console.log("un error en deleteDocument");

    }
}    
async crearCarpeta(){

    try { return await fs.promises.mkdir(`${this.absoluteroute}`, 'algo nuevo');

    } catch (error){
        console.log("un error en crearCarpeta");
    }
}    


}

module.exports = new handlerDocuments()
