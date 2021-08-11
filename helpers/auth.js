const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, BCRYPT_HASH, TOKEN_LIFE } = require('../config');
const bcrypt = require('bcryptjs')

function generateAccessToken(username) {
  return jwt.sign(username, TOKEN_SECRET, { expiresIn: TOKEN_LIFE });
}

async function getBcryptData(data) {
  let _res;
  try {
    await bcrypt.hash(data, BCRYPT_HASH).then(res => {
      _res = res
    })
  } catch(e) {
    console.log(e)
  }
  return _res;
}

async function compareBcryptData(plainData, hash) {
  let _res;
  try {
    await bcrypt.compare(plainData, hash).then(res => {
      _res = res;
    });
  } catch(e) {
    console.log(e)
  }
  return _res;
}

module.exports = {
  generateAccessToken,
  getBcryptData,
  compareBcryptData
};