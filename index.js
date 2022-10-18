let homeEl = document.getElementById("home-el")
let homeScore = 0
let guestEl = document.getElementById("guest-el")
let guestScore = 0

function addOne1(){
  homeScore += 1
  console.log(homeScore)
  homeEl.textContent = homeScore
}
function addTwo1(){
  homeScore += 2
  console.log(homeScore)
  homeEl.textContent = homeScore
}
function addThree1(){
  homeScore += 3
  console.log(homeScore)
  homeEl.textContent = homeScore
}
function addOne2(){
  guestScore += 1
  console.log(guestScore)
  guestEl.textContent = guestScore
}
function addTwo2(){
  guestScore += 2
  console.log(guestScore)
  guestEl.textContent = guestScore
}
function addThree2(){
  guestScore += 3
  console.log(guestScore)
  guestEl.textContent = guestScore
}