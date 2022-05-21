import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

/*This event listener uses an if statement to see if the event target which is attached to the name property, = metal. If it does then the set metal function is invoked and the parseInt function converts its first argument to a string, evaluates that string, and then returns a integer in this case the id. The setMetal function sets the current state
*/
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}"/>${metal.metal}</li>`
    }

    html += "</ul>"
    return html
}

