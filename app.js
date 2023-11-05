const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

console.log(process.argv)

const [ , , arg3 = 'base=5'] = process.argv;
const [ , base ] = arg3.split('='); 
console.log({base})

// const base = 4;
// crearArchivo(base)
//     .then( nombreArchivo => console.log(`${nombreArchivo} creado`))
//     .catch( err => console.log(err));