
const object1 = {
    firstname:"Coding",
    lastname:"Ninjas",
    getName: function(city, age){
        console.log("fullname:", this.firstname,this.lastname,city,age)
    }
}


// object1.getName.call(object1, "Noida", 5)
// object1.getName.apply(object1, ["Noida", 5])
const bindedObject = object1.getName.bind(object1, "Noida", 5);

//bindedObject()

const object2 = {
    firstname:"Web",
    lastname:"Development"
}

//object1.getName.apply(object2, ["delhi", "26"])