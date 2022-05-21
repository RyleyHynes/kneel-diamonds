//we are importing the getStyles and setStyles functions the database
import { getStyles, setStyle } from "./database.js"

//we then need to invoke the getStyles function and assign its return value to the variable styles
const styles = getStyles()

//here we are applying an event listener to the entire document. 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)


/*
1. here we are declaring and exporting a constant function named JewelryStyles 
2. this function creates a new variable (html) and sets it equal to an unordered list.
3. The function is the first, and only, argument that the .map() method will accept.As it iterates the array, it will take the object at the current location and pass it as an argument to your function. Your function defines the styles parameter.We set the value to style.id because this is the primary key. 
4. the listItems returns a list of strings for each size. We then use .join to combine all the strings into one large string.
5. We then set it to += html 
6. then set the closing ul tag to += html
7. return the single html string 
*/
export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            return `<li>
            <input type="radio" name="style" value="${style.id}"/>${style.style}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

