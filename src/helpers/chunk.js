export const chunking = (number, isReview = false) => {
  if (!number) return;
  const chunk = [];
  const card_number = number.split("");

  for (let i = 0; i < card_number.length; i += 4) {
    chunk.push(card_number.slice(i, i + 4));
  }

  chunk[2] = ["*", "*", "*", "*"];
  if (isReview === true) {
    chunk[1] = ["*", "*", "*", "*"];
    chunk[0] = ["*", "*", "*", "*"];
  }

  const c = chunk.map((ch) => {
    return ch.join("");
  });
  return c.join(" ");
};
