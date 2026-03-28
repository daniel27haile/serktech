/**
 * Run this once to generate your admin password hash.
 * Usage: node scripts/create-admin.js yourpassword
 * Copy the hash into config/.env as ADMIN_PASSWORD_HASH
 */
const bcrypt = require('bcrypt');

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/create-admin.js <password>');
  process.exit(1);
}

bcrypt.hash(password, 12).then(hash => {
  console.log('\nAdd this to your config/.env:\n');
  console.log(`ADMIN_PASSWORD_HASH="${hash}"\n`);
});
