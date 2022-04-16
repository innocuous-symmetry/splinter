import '../../styles/GameBoard.css';
import { useEffect, useState } from 'react';

import Card from '../Cards/Card';
import { TierOneDeck } from '../../store/TierOneDeck';
import { TierTwoDeck } from '../../store/TierTwoDeck';
import { TierThreeDeck } from '../../store/TierThreeDeck';

export default function GameBoard() {
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
                newBoard.push(<Card state={AllDecks[tier-1][iter-1]} />);
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
            <h1 className="gameboard-title">SPLINTER</h1>

            <div className="gameboard-row">
                {tierThree || 'Loading'}
            </div>

            <div className="gameboard-row">
                {tierTwo || 'Loading'}
            </div>

            <div className="gameboard-row">
                {tierOne || 'Loading'}
            </div>

            <h2>Deck length: {TierOneDeck.length}</h2>
        </div>
    )
}