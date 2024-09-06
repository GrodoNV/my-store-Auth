const bcrypt =require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123 123 .202'
  const hash = '$2b$10$kAiOZVmy6OghQI9Z3qyUReNSm2cWBF8AP/86qyT68TOmpGzPe/9rm';
  const isMatch = await bcrypt.compare(myPassword, hash );
  console.log(isMatch)
}

verifyPassword();
