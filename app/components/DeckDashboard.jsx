import React, {PropTypes, Component} from 'react';
import DeckCard from './DeckCard';

class DeckDashboard extends Component {
    constructor() {
        super();
        this.state = {
            cardMenuShowed: null
        };
        this.showMiniMenu = this.showMiniMenu.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
    }

    showMiniMenu(id) {
        this.setState({
            cardMenuShowed: id
        });
    }

    hideMiniMenu() {
        this.setState({
            cardMenuShowed: null
        });
    }

    handleBuy(id) {
        this.props.handleBuy(id);
        this.hideMiniMenu();
    }

    handleSell(id) {
        this.props.handleSell(id);
    }

    render() {
        const { deckCards, age, activePlayer, state, players } = this.props;
        const deckClass = activePlayer === 1 ? 'p1' : 'p2';
        console.log(state.toJS());
        return (
            <div className={deckClass}>
                <div className="game-container">
                    <div className="well">
                        <p>P1: {players.getIn(['1', 'gold'])}</p>
                        <p>P2: {players.getIn(['2', 'gold'])}</p>
                    </div>
                    {deckCards.map((r, i) => {
                        return <div key={i} className="deck-row">
                            {r.map(c => {
                                c = c.toJS();
                                return (
                                    <DeckCard
                                        {...c}
                                        key={'card_'+c.id}
                                        age={age}
                                        miniMenu={c.id === this.state.cardMenuShowed}
                                        showMiniMenu={this.showMiniMenu}
                                        >
                                            <button className="btn btn-success btn-block" onClick={(e) => {e.stopPropagation(); this.handleBuy(c.id);}}>Kup</button>
                                            <button className="btn btn-warning btn-block" onClick={(e) => {e.stopPropagation(); this.handleSell(c.id);}}>Sprzedaj</button>
                                            <button className="btn btn-default btn-block" onClick={(e) => {e.stopPropagation(); this.showMiniMenu(null)}}>Anuluj</button>
                                    </DeckCard>);
                            })}
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

DeckDashboard.propTypes = {
    state: PropTypes.object,
    deckCards: PropTypes.object,
    age: PropTypes.string,
    activePlayer: PropTypes.number,
    handleBuy: PropTypes.func,
    handleSell: PropTypes.func,
    players: PropTypes.object
};

export default DeckDashboard;
