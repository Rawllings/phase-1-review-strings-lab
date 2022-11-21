// Write your code in this file!
const currentUser = "Rawllings Kiprop"
// const welcomeMessage = "Welcome to Flatbook, "
const welcomeMessage = `"Welcome to Flatbook, " ${currentUser}!`
const excitedWelcomeMessage = welcomeMessage.toUpperCase()
console.log (excitedWelcomeMessage);
console.log (welcomeMessage);
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`
// const shortGreeting = `Welcome, ${currentUser.slice(0)}!`