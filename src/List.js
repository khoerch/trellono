import React from 'react'
import Card from './Card'
import './List.css'

function List(props) {
    const cardArray = props.cards.map((card, i) => {
        return (
            <Card 
                key={i}
                title={card.title}
                content={card.content}
            />
        )
    })
    return (
        <section className="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {cardArray}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;