import { FastifyInstance } from 'fastify';
import indexRoute from './controllers/index';
import demoRouter from './controllers/demo'
import testReouter from './controllers/test'
import userReouter from './controllers/users'

export default async function router(fastify: FastifyInstance){
    // router prefix
    fastify.register(indexRoute, {prefix: '/'});
    fastify.register(demoRouter, {prefix: '/demo'});
    fastify.register(testReouter, {prefix: '/test'});
    fastify.register(userReouter, {prefix: '/users'});
}

