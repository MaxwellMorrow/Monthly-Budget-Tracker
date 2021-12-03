








/// welcome to bills code

/// selectors are first!
let mortgageAmtCell = document.querySelector("#mortgageAmt")
let mortgageAmtCellH = document.querySelector("#mortgageAmtH")
let hoaAmtCell = document.querySelector("#hoaAmt")
let hoaAmtCellH = document.querySelector("#hoaAmtH")
let internetAmtCell = document.querySelector("#internetAmt")
let internetAmtCellH = document.querySelector("#internetAmtH")
let phoneAmtCell = document.querySelector("#phoneAmt")
let phoneAmtCellH = document.querySelector("#phoneAmtH")
let trashAmtCell = document.querySelector("#trashAmt")
let trashAmtCellH = document.querySelector("#trashAmtH")
let energyAmtCell = document.querySelector("#energyAmt")
let energyAmtCellH = document.querySelector("#energyAmtH")
let waterAmtCell = document.querySelector("#waterAmt")
let waterAmtCellH = document.querySelector("#waterAmtH")
let gasAmtCell = document.querySelector("#gasAmt")
let gasAmtCellH = document.querySelector("#gasAmtH")
let energyAmtSet = document.querySelector("#energyAmtBtn")
let waterAmtSet = document.querySelector("#waterAmtBtn")
let gasAmtSet = document.querySelector("#gasAmtBtn")
let totalAmtCell = document.querySelector("#totalAmtCell")
let totalAmtCellH = document.querySelector("#totalAmtHalvedCell")


/// set bill ammounts 

let mortgageAmt = 1183.31 
let hoaAmt = 68.25
let internetAmt = 92.99
let phoneAmt = 120
let trashAmt = 49.60
let energyAmt = 99.73
let waterAmt = 57.44
let gasAmt = 25.66

//update table contents using set amounts
function setAmt () {
    mortgageAmtCell.textContent = mortgageAmt
mortgageAmtCellH.textContent = mortgageAmt / 2 
hoaAmtCell.textContent = hoaAmt
hoaAmtCellH.textContent = hoaAmt / 2 
internetAmtCell.textContent = internetAmt
internetAmtCellH.textContent = internetAmt / 2
phoneAmtCell.textContent = phoneAmt
phoneAmtCellH.textContent = phoneAmt / 2
trashAmtCell.textContent = trashAmt
trashAmtCellH.textContent = trashAmt / 2
energyAmtCell.textContent = energyAmt
energyAmtCellH.textContent = energyAmt / 2
waterAmtCell.textContent = waterAmt
waterAmtCellH.textContent = waterAmt / 2
gasAmtCell.textContent = gasAmt
gasAmtCellH.textContent = gasAmt / 2
totalAmtCell.textContent = mortgageAmt + hoaAmt + internetAmt + phoneAmt + trashAmt + energyAmt + waterAmt + gasAmt
totalAmtCellH.textContent = (mortgageAmt + hoaAmt + internetAmt + phoneAmt + trashAmt + energyAmt + waterAmt + gasAmt) / 2 
}
setAmt()

// energy amount button  event listener
energyAmtSet.addEventListener("click", function()
{
    energyAmt = parseInt(window.prompt("set amount"))
    setAmt()
})

//water amount button event listener
waterAmtSet.addEventListener("click", function()
{
    waterAmt = parseInt(window.prompt("set amount"))
    setAmt()
})
//gas amount button event listener
gasAmtSet.addEventListener("click", function()
{
    gasAmt = parseInt(window.prompt("set amount"))
    setAmt()
})