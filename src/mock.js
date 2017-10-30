//引入mockjs
const Mock = require('mockjs')
const Random = Mock.Random;
const data = Mock.mock({
  'tableData|10': [{
      date: ()=>Random.date(),
      name: ()=>Random.cname(),
      address: ()=>Random.county(true)
  }]
});
console.log(JSON.stringify(data, null, 4));
const data1=JSON.stringify(data, null, 4)
//使用mockjs模拟数据

Mock.mock('/api/data', (req, res) => {
    return {
        data: data
    }
})
