import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entity/User"
import { Task } from "./entity/Task"
import "dotenv/config";

const getDBConfig = (json:any) => {
    const newObject = {}
    for (const prop in json){
        if(!prop.startsWith("DB_")){
            continue;
        }
        const newProp = prop.substring(prop.indexOf("_")+1).toLowerCase();
        newObject[newProp] = json[prop];
    }
    return newObject;
}

const config = getDBConfig(process.env) as DataSourceOptions;

export const AppDataSource = new DataSource({
    ...config,
    synchronize: true,
    logging: false,
    entities: [User, Task],
    migrations: [],
    subscribers: [],
})
