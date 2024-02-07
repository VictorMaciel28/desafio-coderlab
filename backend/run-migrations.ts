import "reflect-metadata";
import dataSource from "./ormconfig";

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        dataSource.runMigrations();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });