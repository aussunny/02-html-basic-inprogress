var i;
i = 0;
const answer = [];
while (i < 101) {
  if (answer.length === 10) {
    break;
  }
  if (i % 4 === 0 && i % 5 !== 0) {
    answer.push(i);
  }
  i++;
}
console.log(answer);
