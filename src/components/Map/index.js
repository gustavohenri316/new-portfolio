import React from 'react';
import PText from '../PText';
import { MapStyles } from './styles';



export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Contagem, Minas Gerais, Brasil</PText>
          <a
            className="map__card__link"
            href="https://www.google.com.br/maps/@-19.8883584,-44.0936536,19.5z"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
