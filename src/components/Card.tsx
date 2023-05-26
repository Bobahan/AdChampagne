import React from 'react';
import Button from '../generic/button/Button';
import { DataType } from 'api/data';
import '../styles/Card.css';

const Card: React.FC<DataType> = ({ id, title, path, discount }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__img">
          <img src={path} />
        </div>
        <div className="card__discount">{-discount}%</div>
        <div className="card__description">{title}</div>
        <Button className="cardBtn">Add to card</Button>
      </div>
    </div>
  );
};

export default Card;
