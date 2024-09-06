const bcrypt =require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin123 123 .202'
  const hash = await bcrypt.hash(myPassword, 10 );
  console.log(hash)
}

hashPassword();
