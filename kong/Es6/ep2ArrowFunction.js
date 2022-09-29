//  Arrow Function

// old create function
function getName(fname,lname){
    return fname+" "+lname
}

console.log(getName("anouwath","Thammavong"));

// New Creat Function by arrow function
new_get_name=(fn,ln)=>"Firstname = "+fn+" "+"Lastname = "+ln
let n = new_get_name('Anouwath','Thammavong')
console.log(n);