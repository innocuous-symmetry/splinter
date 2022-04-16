import '../../styles/GameBoard.css';
import Card from '../Cards/Card';
import { CardDeck } from '../../store/CardDeck';
import { useEffect, useState } from 'react';

export default function GameBoard() {
    const [trigger, setTrigger] = useState(true);
    const [tierThree, setTierThree] = useState(null);
    const [tierTwo, setTierTwo] = useState(null);
    const [tierOne, setTierOne] = useState(null);

    const [content, setContent] = useState(null);
    
    useEffect(() => {
        // param limit sets limit on number of cards rendered
        // param tier filters by card tier
        const buildGameBoardRow = (limit, tier) => {
            let newBoard = [];
            let iter = 0;
            for (let cardConfig of CardDeck) {
                if (cardConfig.tier !== tier) continue;
                while (iter < limit) {
                    iter++;
                    // if (cardConfig.tier !== tier) continue;
                    newBoard.push(<Card state={cardConfig} />);
                }
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

        if (trigger) buildGameBoardRow(6,1);
    }, [trigger]);

    return (
        <div className="gameboard">
            <h1 className="gameboard-title">SPLINTER</h1>

            <div className="gameboard-row">
                {tierOne || 'Loading'}
            </div>

            <h2>Deck length: {CardDeck.length}</h2>
        </div>
    )
}