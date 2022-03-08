import { useState } from 'react';

import { Navbar, SliderDots } from '../../components';
import data from '../../constants/data.json';
import { images } from '../../constants';
import './Crew.scss';

const Crew = () => {
  const [index, setIndex] = useState(0);

  const crews = data.crew;

  return (
    <div className="crew app__container">
      <Navbar />
      <div className="crew__container">
        <div className="crew__content">
          <div className="crew__header h5-text">
            <span>02</span>
            Meet your crew
          </div>
          <div className="crew__body">
            <h4 className="crew__body-subhead h4-text">{crews[index].role}</h4>
            <h3 className="crew__body-title h3-text">{crews[index].name}</h3>
            <p className="crew__body-content main-text">{crews[index].bio}</p>
          </div>
          <SliderDots list={crews} active={index} clickHandler={setIndex} />
        </div>
        <div className="crew__image">
          <img
            src={
              images[
                `crew${(index + 1).toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                })}`
              ]
            }
            alt="crew"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
