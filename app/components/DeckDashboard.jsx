import React, {PropTypes, Component} from 'react';
import DeckCard from './DeckCard';

class DeckDashboard extends Component {
    render() {
        let { deckCards } = this.props;
        return (
            <div>
                {deckCards.map((r, i) =>
                    <div key={i}>
                        {r.map(c => <DeckCard {...c} key={c.id} />)}
                    </div>
                )}
            </div>
        );
    }
}

DeckDashboard.propTypes = {
  deckCards: PropTypes.array,
  state: PropTypes.object
};

export default DeckDashboard;
