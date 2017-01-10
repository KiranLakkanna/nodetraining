var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=82ac2d06ce85a8d9658eb4391304e097';

module.exports=function(callback){
  request({
  url:url,
  json:true
},function(error,response,body){
  if(error){
    callback('Unable to fetch weather');
  }else{
    callback('It\'s' + body.main.temp +' in '+ body.name+'!');
  }
});
}
