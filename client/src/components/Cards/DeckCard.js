import { useEffect, useState } from "react";

export function DeckCard({ tier }) {
    const [tierDots, setTierDots] = useState(null);
    
    useEffect(() => {
        const singleDot = <div className="tier-dot"></div>
        const mapDots = () => {
            let iter = 0;
            let newState = [];
            while (iter < tier) {
                iter++;
                newState.push(singleDot);
            }
            setTierDots(newState);
        }
        
        mapDots();
    }, [])

    return (
        <div className={`deck-card-${tier} card`}>
            <div className="card-logo">SPLINTER</div>
            <div className="tier-row">
                {tierDots}
            </div>
        </div>
    )
}