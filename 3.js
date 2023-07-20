const feedBack = {
  hight: 10,
  midle: 5,
  bad: 1,
  ok: 2
}

function countProps(obj){
let feedBackArr = Object.keys(obj);
return feedBackArr.length
}


console.log(countProps(feedBack));
