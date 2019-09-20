const fs = require('fs');

fs.access('static/index.html', fs.constants.F_OK,function(err){
    if(err){
        console.log("El Archivo No existe");
    }else{
        console.log("El Archivo Si existe");
    }
})

fs.open('static/index.html', 'r', function(err,fileDescriptor){
        if(err){
            console.log("Error Read File");
            throw err;
        }else{
            console.log(fileDescriptor);
        }
    
    fs.readFile('static/index.html', 'utf-8', function(err, index){
        if(err){
            console.log("Error Read File");
            throw err;
        }
        console.log(index);
    })

})

