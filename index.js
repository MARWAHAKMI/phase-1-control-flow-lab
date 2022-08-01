function scuberGreetingForFeet(param) {
  // Write your code here!
  if (param <= 400) return "This one is on me!"
  else if (param >= 400 && param <= 2000) return "That will be twenty bucks."
  else if (param > 2000 && param <= 2500) return "I will gladly take your thirty bucks."
  else if (param > 2500) return "No can do."
}

function ternaryCheckCity(param) {
  // Write your code here!
  if (param !== "NYC") return "No go."
  return "Ok, sounds good."
}

function switchOnCharmFromTip(param) {
  // Write your code here!
  if (param === 'generous') return "Thank you so much."
  else if (param === "not as generous") return "Thank you."
  else return "Bye."
}