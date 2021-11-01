const judgeVegetable = (vegetables, metric) => {
  return (vegetables.reduce((Leader, Submission) => Submission[metric] > Leader[metric] ? Submission : Leader)).submitter
}