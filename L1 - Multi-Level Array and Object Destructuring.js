const people = [ 
    { name: "Alice", 
      address: { 
              city: "New York", 
              street: { 
                        name: "Broadway",
                        number: 123 } 
                      } 
                }, 
    { name: "Bob",
      address: { 
                 city: "Los Angeles", 
                 street: { 
                          name: "Sunset Boulevard", 
                          number: 456 
                         } 
                } 
    } 
    ];
 var result = [] 
 
for(let i=0; i<people.length; i++){
    let object_value = people[i]
    let { name, address:{city,street}} = object_value
    
    let objdestructuring = (object_value)=>{ 
        result.push(`${name} lives in ${city} on ${street.name}`)
    }
    objdestructuring(object_value)
}

console.log(result)