let data = [0,0, 0,0,0,0,0, 0];
data.map(function (val, index) {
  return index
})

const obj = {
type: "greeting", data: data, value: 'World',  };


console.log('Hello ' + obj['value'] + '!! ' + data.join(' > '))