import { useReducer, createContext } from "react"

import { TierOneDeck } from "../../store/TierOneDeck"
import { TierTwoDeck } from "../../store/TierTwoDeck"
import { TierThreeDeck } from "../../store/TierThreeDeck"
import { Spirits } from "./Spirits"

const initialGameState = {
    players: [],
    materials: {
        cards: {
            tierOneRemaining: TierOneDeck,
            tierTwoRemaining: TierTwoDeck,
            tierThreeRemaining: TierThreeDeck,
        },
        tokens: {
            cedar: 7,
            birch: 7,
            walnut: 7,
            mahogany: 7,
            cherry: 7,
            resin: 5,
        },
        spirits: [...Spirits]
    },
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD PLAYER":
            state.players.push(action.payload);
            break;
        case "UPDATE PLAYER MATERIALS":
            // find player in array of players and update their resources
            // update list of available materials in state
            break;
        default:
            break;
    }
}


export default function Store({ children }) {
    const [state, dispatch] = useReducer(reducer, initialGameState);

    return (
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    )
}

export const Context = createContext(initialGameState);