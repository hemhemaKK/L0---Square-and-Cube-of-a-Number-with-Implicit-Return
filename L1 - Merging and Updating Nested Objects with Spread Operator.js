const profile = { 
    name: "Charlie", 
    age: 29, 
    address: { 
        city: "San Francisco", 
        zipcode: "94101" } 
    };

const updates = { 
    age: 30, 
    address: { 
        zipcode: "94109", 
        country: "USA" } 
    };
    
const mergedobjects = {...profile, ...updates}
console.log(mergedobjects)
