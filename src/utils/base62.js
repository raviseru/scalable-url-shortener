const characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const base = characters.length;

const encodeToBase62 = (num) => {
  if (num === 0) return characters[0];

  let result = "";

  while (num > 0) {
    result = characters[num % base] + result;
    num = Math.floor(num / base);
  }

  return result;
};

module.exports = encodeToBase62;
