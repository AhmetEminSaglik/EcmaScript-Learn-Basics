const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 2345,
  fullName: function () {
    return 'first Name : ' + this.firstName + ', last name :' + this.lastName; // this must be used in object
  },
  myFunction: function () {
    return this;
  }
}


console.log("person.fullName  :\n\n " + person.fullName)
console.log("person.fullName()  :  " + person.fullName())

console.log("person.myFunction  :\n\n " + person.myFunction) // return object function code  in String format
console.log("person.myFunction()  : " + person.myFunction())// return object function result
console.log("person.myFunction().firstName  : " + person.myFunction().firstName) // return object's firstName parameter 

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  name: "Alice", // person1 has firstName but here it is name.
  lastName: "Borderland",
  age: 5
}
console.log(person1.fullName.call(person2));



// With the bind() method, an object can borrow a method from another object.
const person3 = {
  firstName: "Bob",
  lastName: "Marlins",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName + " " + this.age;
  }
}

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
}

let varTest = person3.fullName.bind(member); //if  variable fullName2 use like this return code String format. If it is used with bracktets then it works as function.
console.log("person3.fullName() : " + person3.fullName());
console.log("member (only firstName and lastName is declared): " + member.firstName + " " + member.lastName);
console.log("person3.fullName.bind(member) : " + varTest());

/* 
Precedence	Object
1	bind()
2	apply() and call()
3	Object method
4	Global scope
*/
