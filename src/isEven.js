export default (question) => {
  let answer = '';
  if (question % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};
