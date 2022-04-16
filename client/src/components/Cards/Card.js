import '../../styles/Card.css';

export default function Card({ state }) {
    const { tier, points, isWorth, cost } = state;

    const mapCosts = () => {
        let allCosts = [];
        for (let [key, value] of Object.entries(cost)) {
            if (value < 1) continue;
            allCosts.push(<>{value} {key}<br/></>);
        }
        return allCosts;
    }

    return (
        <div className="card">
            <div className="card-row">
                <div className="value">{isWorth}</div>
                <div className="points">{points} points</div>
            </div>

            <div className="card-row bottom-row">
                <div className={`tier tier-${tier}`}></div>
                <div className="costs">Costs:<br/> {mapCosts()}</div>
            </div>
        </div>
    )
}