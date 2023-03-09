// Code your solutions in this file
const message = [];
function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }

  return message;
}

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
    return number;
}

countDown(number)