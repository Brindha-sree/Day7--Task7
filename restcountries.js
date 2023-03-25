
//A.Get all the countries from the Asia continent /region using the Filter function//

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.responseType='json';
request.send();
request.onload=function(){
    var responseObj=request.response;
    var res=responseObj.filter(function(item){
    return item.continents == 'Asia' ;
});
var finalResult=res.map(function(item){
    return item['name']['common'];
});
console.log(finalResult);
}



//B. Get all the countries with a population of less than 2 lakhs using Filter function//


var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.responseType='json';
request.send();
request.onload=function(){
    var responseObj=request.response;
    var res=responseObj.filter(function(item){
    return item.population < 200000;
});
console.log(res)
}




//C.Print the following details name, capital, flag using forEach function//

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.responseType='json';
request.send();
request.onload=function(){
    var responseObj=request.response;
    responseObj.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);  
    });
}


// D.Print the total population of countries using reduce function //

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.responseType='json';
request.send();
request.onload=function(){
    var responseObj=request.response;
    var res=responseObj.reduce(function(item,item1){
    return item+item1.population;
});
console.log(res)
}



// E. Print the country which uses US Dollars as currency //


  var request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all", true);
  request.send();
  request.responseType = "json";
  request.onload = () => {
    const data = request.response;
    const datas = data
      .filter((item) => item?.currencies?.USD)
      .map((value) => value.name);
    console.log('datas', datas);
  };
  