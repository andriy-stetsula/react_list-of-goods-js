import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goodState, setGoodState] = useState(goodsFromServer);
  const [goodStyle, setGoodStyle] = useState(null);
  const [isReverse, setIsReverse] = useState(false);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${goodStyle === 'alpha' ? 'is-light' : ''}`}
          onClick={() => {
            setGoodState([...goodState].sort((a, b) => a.localeCompare(b)));
            setGoodStyle('alpha');
            setIsReverse(false);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${goodStyle === 'length' ? 'is-light' : ''}`}
          onClick={() => {
            setGoodState([...goodState].sort((a, b) => a.length - b.length));
            setGoodStyle('length');
            setIsReverse(false);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${goodStyle ? 'is-light' : ''}`}
          onClick={() => {
            setGoodState([...goodState].reverse());
            setGoodStyle(false);
            setIsReverse(!isReverse);
          }}
        >
          Reverse
        </button>

        {goodState !== goodsFromServer && (
          <button
            type="button"
            className={`button is-danger ${goodStyle === 'reset' ? 'is-light' : ''}`}
            onClick={() => {
              setGoodState(goodsFromServer);
              setGoodStyle('reset');
              setIsReverse(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goodState.map(item => (
          <li key={item} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
