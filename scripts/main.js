//THE MAIN.JS MODULE IS DEFERRING THE RESPONSIBILITY OF DEFINING THE HTML TO KNEELDIAMONDS.JS
//Here we are importing the KneelDiamonds function which is invoked
import { KneelDiamonds } from "./KneelDiamonds.js"

//here we are using querySelector method to search the DOM (document object model) for the element with the ID = "container" which can be found in the index.html and assigning its return value to mainContainer
const mainContainer = document.querySelector("#container")

//This function is needed later in the growth of your application, because for kneel diamonds, you are going to react to the user choosing options
//Overall we are creating a constant function that invokes the KneelDiamonds function and reassign its value to the mainContainer.InnerHTML which can be found in the index.html
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
