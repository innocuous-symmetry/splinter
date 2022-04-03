import { useState, useEffect } from "react";

export default function LocalMultiForm() {
    const [players, setPlayers] = useState(null);
    const [formVariant, setFormVariant] = useState(null);
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState('');
    const [playerFour, setPlayerFour] = useState('');

    const formVariants = [
        <>   { /* Fragment, expects to be concatenated as necessary within a <form> element */ }
                { /* Player one and two base; index 0 */ }
        <label key="p1" htmlFor="player-one">Player One:</label>
        <input key="t1" type="text" id="playerOne" onChange={(e) => setPlayerOne(e.target.value)}></input>
        <label key="p2" htmlFor="player-two">Player Two:</label>
        <input key="t2" type="text" id="playerTwo" onChange={(e) => setPlayerTwo(e.target.value)}></input>
        </>
        ,
        <>  { /* Player three add on */ }
        <label key="p3" htmlFor="player-three">Player Three:</label>
        <input key="t3" type="text" id="playerThree" onChange={(e) => setPlayerThree(e.target.value)}></input>
        </>
        ,
        <>
        <label key="p4" htmlFor="player-four">Player Four:</label>
        <input key="t4" type="text" id="playerFour" onChange={(e) => setPlayerFour(e.target.value)}></input>
        </>
    ];

    // useEffect for player form logic

    useEffect(() => {
        switch (players) {
            case "2":
                setFormVariant(formVariants[0]);
                break;
            case "3":
                setFormVariant([formVariants[0], formVariants[1]]);
                break;
            case "4":
                setFormVariant([...formVariants]);
                break;
            default:
                console.log("none");
                break;
        }
    }, [players]);

    return (
        <>
        <form className="local-multi-form" style={{paddingBottom: '2rem'}}>
            <h3 htmlFor="num-players">Number of players:</h3>

            <div>
                <label htmlFor="2">2 Players</label>
                <input id="2" name="num-players" type="radio" onChange={(e) => setPlayers(e.target.id)}></input>
            </div>
            <div>
                <label htmlFor="3">3 Players</label>
                <input id="3" name="num-players" type="radio" onChange={(e) => setPlayers(e.target.id)}></input>
            </div>
            <div>
                <label htmlFor="4">4 Players</label>
                <input id="4" name="num-players" type="radio" onChange={(e) => setPlayers(e.target.id)}></input>
            </div>
        </form>

        <form className="player-input" style={{paddingBottom: '1rem'}}>
            {formVariant}
        </form>
        </>
    )
}