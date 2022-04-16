import { useReducer, createContext } from "react"

import { TierOneDeck } from './TierOneDeck';
import { TierTwoDeck } from './TierTwoDeck';
import { TierThreeDeck } from './TierThreeDeck';
import { Spirits } from '../components/Game/Spirits';

const initialGameState = {
    players: ['no players'],
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
        case "GET PLAYERS":
            return state;
        case "ADD PLAYERS":
            state.players = action.payload;
            return state;
        case "UPDATE PLAYER MATERIALS":
            // find player in array of players and update their resources
            // update list of available materials in state
            break;
        case "PRINT PLAYERS":
            console.log(state.players);
            return state;
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