const day = +prompt('Enter number between 1 and 31: ');

const checkDay = function(day) {
  if (isNaN(day)) {
    console.error('Enter correct number!');
    return null;
  }
  switch (true) {
    case (day >= 1 && day < 11): {
      console.log('Day is in first decade');
      break;
    }
    case (day >= 11 && day < 21): {
      console.log('Day is in second decade');
      break;
    }
    case (day >= 21 && day <= 31): {
      console.log('Day is in third decade');
      break;
    }
    default: {
      console.log('Day is out of range');
      break;
    }
  }
}


checkDay(day);