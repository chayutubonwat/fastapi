import * as Knex from "knex";


export class UserModel {
  create(db: Knex, data: any) {
    return db("users")
    .insert(data)
  }
}
