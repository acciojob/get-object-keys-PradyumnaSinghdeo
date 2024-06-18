//your JS code here. If required.
// Create the student object with a property called name
var student = {
    name: 'John Doe'
};

// Add a method to the Object prototype to return an array of all the keys in the object
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Testing the getKeys method
console.log(student.getKeys()); 
