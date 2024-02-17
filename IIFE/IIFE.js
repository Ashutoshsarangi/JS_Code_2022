// Named IIFE

(function () {
  console.log("Named IIFE It has a Function Name");
})();

// Anonymous IIFE Function

(() => console.log("This is Anonymous Function IIFE"))();

// If we start IIFE we need to end with ; To close 1st IIFE's Context

// Parameter to IIFE

((name) => console.log(`This is Parameter IIFE ${name}`))("Ashu");
