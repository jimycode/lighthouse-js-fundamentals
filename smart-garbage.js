const smartGarbage = (trash, bins) => {
  for (let x in bins){
    if(x == trash){
      bins[x]+=1;
    }
  }
  return bins;
};
