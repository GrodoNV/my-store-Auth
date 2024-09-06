const jwt = require('jsonwebtoken');

const secret = 'myCat'; //por buenas practicas esto deberia de estar en una variable de ambiente
const payload = {
  sub:1, //minimo estandar que debe de tener aun que solo el sub , por otro lado podemos poner scope o role y demas cosas para manejar
  role: 'customer'
}

function signToken(payload ,secret){
  return jwt.sign(payload, secret);
}


const token = signToken(payload, secret);
console.log(token);

//recordatorio mega importante !!!! = el secret solo debe saberlo el backend , no deberia estar en el codigo como aqui ...
