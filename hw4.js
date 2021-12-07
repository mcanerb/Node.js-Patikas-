const fs = require('fs')


//Dosya Yazmak
fs.writeFile('example.json' ,'{"name": "Employee 1 Name","salary": "2000" }' ,'utf8',(err,data) => {
    if(err) console.log(err);
    console.log("Dosya oluşturuldu.");

});

fs.readFile('example.json','utf8',(err,data) =>{
    if(err) console.log(err);
    console.log(data);
    console.log("Dosya okundu.");
});

fs.appendFile('example.json' ,'\n {"name": "Employee 2 Name","salary": "3000" }' ,'utf8',(err,data) => {
    if(err) console.log(err);
    console.log("Yeni veri eklendi.");

});

fs.unlink('example.txt',(err) => {
    if(err) console.log(err);
    console.log('Dosya silindi');
})