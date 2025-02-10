import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './styles.css';

const cardsData = [
  { id: 1, content: 'A' },
  { id: 2, content: 'A' },
  { id: 3, content: 'B' },
  { id: 4, content: 'B' },
  // Agrega más cartas según sea necesario
];

const Card = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  margin: 10px;
  cursor: pointer;
  background-color: ${props => (props.visible ? '#fff' : '#000')};
  color: ${props => (props.visible ? '#000' : '#fff')};
`;

const App = () => {
  const [cards, setCards] = useState(cardsData.map(card => ({ ...card, visible: false })));

  const handleCardClick = (id) => {
    setCards(cards.map(card => card.id === id ? { ...card, visible: !card.visible } : card));
  };

  return (
    <div className="game-board">
      {cards.map(card => (
        <Card key={card.id} visible={card.visible} onClick={() => handleCardClick(card.id)}>
          {card.visible ? card.content : ''}
        </Card>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));