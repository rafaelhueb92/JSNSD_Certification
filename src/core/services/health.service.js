const fs = require("fs");
const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`))
class HealthService {

    get(){
        try {
            return {
                health:true,
                version:packageJson.version
            }
        }
        catch(ex){
            throw ex;
        }
    }

}

module.exports = new HealthService();