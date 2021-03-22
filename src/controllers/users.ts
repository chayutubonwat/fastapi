import { FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';
import * as crypto from 'crypto';
import { UserModel } from '..//models/user';
import * as knex from 'knex';
export default async function users(fastify:FastifyInstance){
    const userModel = new UserModel()
    const db:knex = fastify.knex
    fastify.post('/', async (request: FastifyRequest, reply:FastifyReply)=>{
        const body:any = request.body

        const username =body.username
        const password =body.password
        const firstName =body.firstName
        const lastName =body.lastName
        try {
            const encPassword = crypto.createHash('md5').update(password).digest('hex')
            const data:any= { };
            data.username=username
            data.password=encPassword
            data.first_name=firstName
            data.last_name=lastName


            await userModel.create(db ,data)
            reply.send({ok:true})
        } catch (error) {
            console.log(error);
            reply.code(500).send({ok:false, message:error.message})
        }
    });
}