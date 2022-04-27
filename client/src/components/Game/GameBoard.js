import { useContext, useEffect, useState } from 'react';
import { Context } from '../../store/Store';
import '../../styles/GameBoard.css';
import Card from '../Cards/Card';
import { DeckCard } from '../Cards/DeckCard';

import jsonCards from '../../store/cards.json';

export default function GameBoard() {
    const [state, dispatch] = useContext(Context);

    const [trigger, setTrigger] = useState(true);
    const [rowThree, setRowThree] = useState(null);
    const [rowTwo, setRowTwo] = useState(null);
    const [rowOne, setRowOne] = useState(null);

    const { tierOne, tierTwo, tierThree } = jsonCards;
    
    useEffect(() => {
        const AllDecks = [tierOne, tierTwo, tierThree];

        // param limit sets limit on number of cards rendered
        const buildGameBoardRow = (limit, tier) => {
            let newBoard = [<DeckCard tier={tier} />];
            let i = 0;
            while (i < limit) {
                i++;
                if (!AllDecks[tier-1][i-1]) continue;
                newBoard.push(<Card tier={tier} props={AllDecks[tier-1][i-1]} />);
            }

            switch (tier) {
                case 1:
                    setRowOne(newBoard);
                    setTrigger(false);
                    break;
                case 2:
                    setRowTwo(newBoard);
                    setTrigger(false);
                    break;
                case 3:
                    setRowThree(newBoard);
                    setTrigger(false);
                    break;
                default:
                    setTrigger(false);
                    break;
            }
        }

        if (trigger) {
            buildGameBoardRow(4,3);
            buildGameBoardRow(4,2);
            buildGameBoardRow(4,1);
        }
    }, [trigger]);

    return (
        <div className="gameboard">
            <a href='/' className="gameboard-title">SPLINTER</a>
            <div>
                <h2>Players:</h2>
                {state.players.map(player => {
                    return (
                        <div className="player-info">
                            <p>{player.name}</p>
                            <p>{player.points && `Score: ${player.points}`}</p>
                        </div>
                    )
                })
                }
            </div>

            <div className="gameboard-row">
                {rowThree || 'Loading'}
            </div>

            <div className="gameboard-row">
                {rowTwo || 'Loading'}
            </div>

            <div className="gameboard-row">
                {rowOne || 'Loading'}
            </div>

            <div className="section-border"></div>
        </div>
    )
}