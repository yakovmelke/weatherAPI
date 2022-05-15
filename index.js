// let parsedData = JSON.parse(stringifyData);
// console.log(parsedData[0].productName = 'Kaki');
// XHR = XMLHttpRequest //
let XHR = new XMLHttpRequest();
XHR.open('GET','https://randomuser.me/api/');
XHR.onload = function(){
    let img = document.querySelector('img');
    let para = document.querySelectorAll(`p`);
    let translatedJSON = JSON.parse(XHR.responseText);
    console.log(translatedJSON.results[0]);
     img.src = translatedJSON.results[0].picture.large;
     para[0].innerText =  translatedJSON.results[0].name.first +" "+ translatedJSON.results[0].name.last ;
     para[1].innerText =  translatedJSON.results[0].phone ;
     para[2].innerText =  translatedJSON.results[0].email ;
     para[3].innerText =  translatedJSON.results[0].location.country ;
}
XHR.send();