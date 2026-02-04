import { useState } from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"


export default function App() {

    /**
     * Challenge: Update the `hold` function to flip
     * the `isHeld` property on the object in the array
     * that was clicked, based on the `id` prop passed
     * into the function.
     * 
     * Hint: as usual, there's more than one way to 
     * accomplish this.
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
        setArrayOfDice(prevDie => prevDie.map(die =>
            die.id === id ? {...die, isHeld: !die.isHeld} : die
        ))
    }

    const diceElements = arrayOfDice.map(obj => 
        <Die 
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