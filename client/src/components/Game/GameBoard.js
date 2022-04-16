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

    let currentCards = {
        tierOneCards: null,
        tierTwoCards: null,
        tierThreeCards: null,
    };
    
    useEffect(() => {
        // param limit sets limit on number of cards rendered
        // param tier filters by card tier
        const buildGameBoardRow = (limit) => {
            let newBoard = [];
            let iter = 0;
            for (let cardConfig of CardDeck) {
                while (iter < limit) {
                    iter++;
                    // if (cardConfig.tier !== tier) continue;
                    newBoard.push(<Card state={cardConfig} />);
                }
            }
            setContent(newBoard);
            setTrigger(false);
        }

        if (trigger) buildGameBoardRow(6);
    }, [trigger]);

    return (
        <div className="gameboard">
            <h1 className="gameboard-title">SPLINTER</h1>

            <div className="gameboard-row">
                {content || 'Loading'}
            </div>

            <h2>Deck length: {CardDeck.length}</h2>
        </div>
    )
}