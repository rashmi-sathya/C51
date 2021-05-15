// Initialize a global variable
var variablename = "global variable";

function transform() {
  // Initialize a local, function-scoped variable
  var variablename = "local variable";
  console.log(variablename);
}

// Log the global and local variable
console.log(variablename);
transform();
console.log(variablename);