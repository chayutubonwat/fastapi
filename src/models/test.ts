import Knex from "knex";

import * as knex from 'knex';
export class TestModel {
    test(db: Knex){
        return db('users')
    }
}