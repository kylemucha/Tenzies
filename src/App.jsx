import { useState } from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"


export default function App() {

    /**
     * Challenge: Create a function `hold` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
     */
    
    

    const [arrayOfDice, setArrayOfDice] = useState(generateAllNewDice());
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
                }))
    }

    function getNewDice() {
        setArrayOfDice(generateAllNewDice());
    }

    function hold(id) {
        console.log(id);
    }

    const diceElements = arrayOfDice.map(obj => <Die 
        key={obj.id}
        onClick={() => hold(obj.id)}
        value={obj.value} 
        isHeld={obj.isHeld}
        />)

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