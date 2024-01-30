function doWhatever(obj: any) {
  console.log(obj.user.name);
  obj();
  const result = obj * 10;
  return result;
}
