import React, { PropTypes, Component } from 'react';

class DeckCard extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.lock) {console.warn('Locked card'); return;}
        this.props.showMiniMenu(this.props.id);
    }

    render() {
        let cardClass = ['card', this.props.type, this.props.age];
        if (this.props.flip) {
            cardClass.push('flip');
        }
        if (this.props.hidden) {
            cardClass.push('hidden--alt');
        }

        return (
            <div className={cardClass.join(' ')} onClick={this.handleClick}>
                <div className="card__top"></div>
                <div className="card__body">
                    {JSON.stringify(this.props.cost)}<br />
                    {JSON.stringify(this.props.supply)}
                    {this.props.children ? <div className={`card__deck-menu${this.props.miniMenu ? ' show' : ''}`}>{this.props.children}</div> : null}
                    <span className="card__body__name">{this.props.name}</span>
                </div>
            </div>
        );
    }
}

DeckCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    cost: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    supply: PropTypes.object,
    age: PropTypes.string,
    flip: PropTypes.bool,
    lock: PropTypes.bool,
    hidden: PropTypes.bool,
    children: PropTypes.node,
    miniMenu: PropTypes.bool,
    showMiniMenu: PropTypes.func
};

export default DeckCard;
