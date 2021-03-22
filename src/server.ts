import app from './app';

const port = 9000;
const address = '127.0.0.1'
const start = async()=>{
    try {
        await app.listen(port,address)
        console.log('Server listing at '+ address);

    } catch (error) {
        console.log(error);
        process.exit(0)
        
    }
}


start();

