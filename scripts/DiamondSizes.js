import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

/*
1. here we are declaring and exporting a constant function named DiamondSizes 
2. this function creates a new variable (html) and sets it equal to an unordered list.
3. The function is the first, and only, argument that the .map() method will accept.As it iterates the array, it will take the object at the current location and pass it as an argument to your function. Your function defines the size parameter.We set the value to size.id because this is the primary key. 
4. the listItems returns a list of strings for each size. We then use .join to combine all the strings into one large string.
5. We then set it to += html 
6. then set the closing ul tag to += html
7. return the single html string 
*/
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    //unlike a for..of loop the .map() method invokes the function that you define
    const listItems = sizes.map(
        (size) => {
        return `<li>
            <input type="radio" name="size" value="${size.id}"/> ${size.carets}
            </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

