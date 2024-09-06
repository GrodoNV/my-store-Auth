const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcyNTY0MTUzNX0.0Yb6A1_THPxurkZsJO4DdfZ-UX76I2eLXl0y94BRrmk';

function verifyToken( token ,secret){
  return jwt.verify(token, secret);
}


const payload = verifyToken(token, secret);
console.log(payload);

