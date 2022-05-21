import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === ""){
            addCustomOrder()
    }
}
)
//here we are creating an exportable function KneelDiamonds which returns all of our HTML to our document.
export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

/*HTML breakdown:
1. The <h1></h1> tags represent our title at the top of the page 
2. <article class="choices"></article> tag gives our sections a class of "choices" which allows us to call and manipulate all of these sections. 
3. The <h2></h2> tags are the titles for all of our sections 
4. each <section class=> allows us to call and manipulate specific sections. 
5. the interpolated lines below the <h2></h2> tags allow us to inject our functions into specific spots on the web page
6. the <button></button> tag for helps us create our custom order button. 
7. the <article class="customOrders"> is where all of our orders are placed.
*/

