export default class Card {
    constructor(state) {
        this.state = {
            tier: state.tier,
            points: state.points,
            isWorth: state.worth,
            cost: {
                acorns: state.cost.acorns,
                pineCones: state.cost.pineCones,
                walnuts: state.cost.walnuts,
                apples: state.cost.apples,
                twigs: state.cost.twigs
            }
        };
    }
}