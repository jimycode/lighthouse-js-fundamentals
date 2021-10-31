function range (start, end, step) {
  let array = [];
  let now = start;
  if ((now > end && step > 0) || (now < end && step < 0)){
    return array;
  } else if (start,end,step === undefined){
    return array;
  } else {
    array.push(now);
  }

  if (step > 0) { //positive
    for (let i = start; i < end; i += step){
      if (now + step <=  end){
        now += step;
        array.push(now);
      }
    }
  } else if (step < 0) { //negative
    for (let i = start; i > end; i += step){
      if (now + step >=  end){
        now += step;
        array.push(now);
      }
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10,0,-2));