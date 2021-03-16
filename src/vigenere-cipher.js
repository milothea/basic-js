class VigenereCipheringMachine {
  constructor(type) {
    if (type === undefined || type) {
      this.machineType = true;
    } else {
      this.machineType = false;
    }
  }

  encrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw new Error('Please, input message and key.');
    }

    const fullKey = this.generateKey(message, key);

    let encryptedMessage = message.toUpperCase().split('');

    return encryptHandler(encryptedMessage, fullKey, this.machineType).join('');

    function encryptHandler(mes, key, type) {
      let newMes = mes.map((item, i) => {
        if (item === ' ') {
          return item;
        }

        if (typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
          let n = +(key.charCodeAt(i)) - 65;
          let encryptedCode = 0;

          if ((+(item.charCodeAt(0)) + n) > 90) {
            encryptedCode = 64 + (n - (90 - +(item.charCodeAt(0))));
          } else {
            encryptedCode = +(item.charCodeAt(0)) + n;
          }

          return String.fromCharCode(encryptedCode);
        } else {
          return item;
        }
      });

      if (!type) {
        return newMes.reverse();
      }

      return newMes;
    }
  }

  decrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw new Error('Please, input message and key.');
    }

    const fullKey = this.generateKey(message, key);

    let decryptedMessage = message.toUpperCase().split('');

    return decryptHandler(decryptedMessage, fullKey, this.machineType).join('');

    function decryptHandler (mes, key, type) {
      let newMes = mes.map((item, i) => {
        if (item === ' ') {
          return item;
        }

        if (typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90 ) {
          let n = +(key.charCodeAt(i)) - 65;
          let encryptedCode = 0;

          if ((+(item.charCodeAt(0)) - n) < 65) {
            encryptedCode = 91 - (65 - (+item.charCodeAt(0) - n));
          } else {
            encryptedCode = +(item.charCodeAt(0)) - n;
          }

          return String.fromCharCode(encryptedCode);
        } else {
          return item;
        }
      });

      if (!type) {
        return newMes.reverse();
      }

      return newMes;
    }
  }

  generateKey(message, key) {
    let index = 0,
      newKey = '';

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        newKey += ' ';
        continue;
      }

      if (index === key.length) {
        index = 0;
      }

      newKey += key[index];
      index++;
    }

    return newKey.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
