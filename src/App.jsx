import { useState } from "react"
import Die from "./components/Die"

    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

export default function App() {

    const [arrayOfDice, setArrayOfDice] = useState(generateAllNewDice());
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    function getNewDice() {
        setArrayOfDice(generateAllNewDice());
    }

    const diceElements = arrayOfDice.map(num => <Die value={num} />)

    return (
        <>
            <main>
                <div className="die-grid">
                    {diceElements}
                </div>

                <button className="roll-button"
                    onClick={getNewDice}>
                        Roll
                </button>
            </main>
        </>
    )
}