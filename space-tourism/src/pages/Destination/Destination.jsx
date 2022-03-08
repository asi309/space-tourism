import { useState } from 'react';

import { Navbar, SliderTabs } from '../../components';
import data from '../../constants/data.json';
import { images } from '../../constants';
import './Destination.scss';

const Destination = () => {
  const [index, setIndex] = useState(0);

  const destinations = data.destinations;

  return (
    <div className="destination app__container">
      <Navbar />
      <div className="destination__container">
        <div className="destination__header h5-text">
          <span>01</span>
          Pick your destination
        </div>
        <div className="destination__body">
          <div className="destination__body-image">
            <img
              src={
                images[
                  `des${(index + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                  })}`
                ]
              }
              alt="destination"
            />
          </div>
          <div className="destination__body-content">
            <SliderTabs
              list={destinations}
              active={index}
              clickHandler={setIndex}
            />
            <h2 className="destination__body-content-title h2-text">
              {destinations[index].name}
            </h2>
            <p className="destination__body-content-text main-text">
              {destinations[index].description}
            </p>
            <div className="destination__body-line" />
            <div className="destination__stats">
              <div className="destination__stats-distance">
                <p>AVG. DISTANCE</p>
                {destinations[index].distance}
              </div>
              <div className="destination__stats-time">
                <p>Est. travel time</p>
                {destinations[index].travel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
