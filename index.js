
const firstDate = new Date('01/20/2020');
const secondDate = new Date('05/29/2020');

const differenceInTime = secondDate.getTime() - firstDate.getTime();

const differenceInDays = differenceInTime / (1000 * 3600 * 24);

console.log(differenceInDays);