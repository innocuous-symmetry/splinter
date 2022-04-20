import { useContext, useEffect, useState } from 'react';
import { Context } from '../../store/Store';
import '../../styles/GameBoard.css';
import Card from '../Cards/Card';
import { TierOneDeck } from '../../store/TierOneDeck';
import { TierTwoDeck } from '../../store/TierTwoDeck';
import { TierThreeDeck } from '../../store/TierThreeDeck';

import {v4} from 'uuid';

export default function GameBoard() {
    const [state, dispatch] = useContext(Context);

    const [trigger, setTrigger] = useState(true);
    const [tierThree, setTierThree] = useState(null);
    const [tierTwo, setTierTwo] = useState(null);
    const [tierOne, setTierOne] = useState(null);
    
    useEffect(() => {
        const AllDecks = [TierOneDeck, TierTwoDeck, TierThreeDeck];
        
        // param limit sets limit on number of cards rendered
        // param tier filters by card tier
        const buildGameBoardRow = (limit, tier) => {
            let newBoard = [];
            let iter = 0;
            while (iter < limit) {
                iter++;

                if (!AllDecks[tier-1][iter-1]) continue;
                newBoard.push(<Card key={`card-${v4()}`}state={AllDecks[tier-1][iter-1]} />);
            }

            switch (tier) {
                case 1:
                    setTierOne(newBoard);
                    setTrigger(false);
                    break;
                case 2:
                    setTierTwo(newBoard);
                    setTrigger(false);
                    break;
                case 3:
                    setTierThree(newBoard);
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
                {tierThree || 'Loading'}
            </div>

            <div className="gameboard-row">
                {tierTwo || 'Loading'}
            </div>

            <div className="gameboard-row">
                {tierOne || 'Loading'}
            </div>

            <h2>Tier one length: {TierOneDeck.length} / 40</h2>
            <h2>Tier two length: {TierTwoDeck.length} / 30</h2>
            <h2>Tier three length: {TierThreeDeck.length} / 20</h2>
        </div>
    )
}