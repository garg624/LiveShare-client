function generateRandomString(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
export {
    generateRandomString
}
//   console.log(generateRandomString(6)); // Example output: '4fj8Kl'
  