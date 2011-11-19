var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(0, 4);
    
    var keys = [];
    var fruits =  ['apple', 'orange'];
    for(propertyName in fruits) {
        keys.push(propertyName);
    //    console.log(propertyName);
    }
    
    //console.log(workingWeek);
    //console.log(daysOfWeek);
    
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    
    //console.log(results);
    
    //console.log([1,2,3] == [1,2,3]);
    
    //console.log(results[0]);
    //console.log(results[1]);
    //console.log(results[2]);
    
    var x = { name:"Simon"};
    
    console.log(x);
    
    var y = JSON.stringify(x);
    
    console.log(y);