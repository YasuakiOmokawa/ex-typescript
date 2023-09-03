const num:number = Number(process.env.SECRET) ?? 0;

if (num < 0) {
  console.log('Number is negative.');
} else if (num > 0) {
  console.log('Number is positive.');
} else {
  console.log('Number is zero.');
}
