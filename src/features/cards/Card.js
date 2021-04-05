import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

//import (step 19)
import { useSelector } from 'react-redux';
import { selectCards } from './cardsSlice';

export default function Card({ id }) {
  const cards = useSelector(selectCards); // a call to your selector to get all the cards in state (step 19)
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
