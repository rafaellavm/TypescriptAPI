import * as express from 'express';
import {Application} from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

class Api {

    public express: Application;

    constructor(){

        this.express = express();
    }

    middleware(): void{
        
        //toda requisição que é feita é gerado um log no console
        this.express.use(morgan('dev'));

        this.express.use(bodyParser.urlencoded({extended:true}));
        this.express.use(bodyParser.json());
    }
}

//devolve a instância da classe junto da propriedade express
export default new Api().express;