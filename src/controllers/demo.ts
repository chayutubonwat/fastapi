import { FastifyInstance, FastifyRequest, FastifyReply} from 'fastify';


export default async function demo(fastify:FastifyInstance){
    fastify.get('/', async (request: FastifyRequest, reply:FastifyReply)=>{
        reply.send({mesage:"Demo from get Router"})
    });

    //create

    fastify.post('/', async (request: FastifyRequest, reply:FastifyReply)=>{
        reply.send({mesage:"Demo from  POST Router"})
    });

    fastify.post('/params', async (request: FastifyRequest, reply:FastifyReply)=>{
        const body: any = request.body
        const username = body.username
        const password = body.password


        reply.send({username,password})

    });

    //http:localhost:9000/chayut/ubonwat get vaule form url

    fastify.get('/:firstName/:lastName', async (request: FastifyRequest, reply:FastifyReply)=>{
        const params: any = request.params;
        const firstName = params.firstName;
        const lastName = params.lastName;
        
        reply.send({firstName,lastName})
    });
 
    //http:localhost:9000/demo?firstName=chayut&lastName=ubownat  get parameter from query string
    
    fastify.get('/query', async (request: FastifyRequest, reply:FastifyReply)=>{
       const query : any = request.query
       const firstName = query.firstName
       const lastName = query.lastName
       reply.send({firstName,lastName})
    });



}