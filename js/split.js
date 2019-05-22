let str = '320:1;640:2;1000:3;1400:4'
let arr = [];

str = str.split(';').map((item) => {
  let vals = item.split(':');
  return {
    bp: vals[0],
    num: vals[1]
  }
})
