let person = {
    name : "Rohan",
    age : 18,
    city : "Hyderabad",
    habits : ["playing Chess" , "singing"],
    car : {
        name : "Audi",
        model : "A6",
        color : "Grey"
    }
}
person["gender"] = "Male"

console.log(person.habits[0])
console.log(person["habits"][1])
console.log(person.car.name)
console.log(person.car.model)
console.log(person["car"])
console.log(person["car"]["color"])