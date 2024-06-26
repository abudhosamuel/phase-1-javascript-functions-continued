// code your solution here
// Function saturdayFun with default argument 'roller-skate'
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function mondayWork with default argument 'go to the office'
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Testing the functions
  console.log(saturdayFun("bathe my dog")); // Should output: "This Saturday, I want to bathe my dog!"
  console.log(saturdayFun()); // Should output: "This Saturday, I want to roller-skate!"
  
  console.log(mondayWork("work from home")); // Should output: "This Monday, I will work from home."
  console.log(mondayWork()); // Should output: "This Monday, I will go to the office."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Should output: "You are !!!a dedicated programmer!!!"
  
  const defaultPromptFunction = wrapAdjective();
  console.log(defaultPromptFunction("a hard worker")); // Should output: "You are *a hard worker*"
  