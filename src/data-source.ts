import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Task } from "./entity/Task"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "motty.db.elephantsql.com",
    port: 5432,
    username: "enwkswla",
    password: "yZMgF4XvkYUjCwPdrnFUjETW0oZKy79S",
    database: "enwkswla",
    synchronize: true,
    logging: false,
    entities: [User, Task],
    migrations: [],
    subscribers: [],
})
