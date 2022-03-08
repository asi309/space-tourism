import { useState } from 'react';

import { Navbar, SliderCircles } from '../../components';
import data from '../../constants/data.json';
import { images } from '../../constants';
import './Technology.scss';

const Technology = () => {
  const [index, setIndex] = useState(0);

  const tech = data.technology;

  return (
    <div className="technology app__container">
      <Navbar />
      <div className="technology__container">
        <div className="technology__header h5-text">
          <span>03</span>
          SPACE LAUNCH 101
        </div>
        <div className="technology__body">
          <div className="technology__body-content">
            <SliderCircles list={tech} active={index} clickHandler={setIndex} />
            <div className="technology__body-content-card">
              <h5 className="technology__body-content-subhead nav-text">
                THE TERMINOLOGY…
              </h5>
              <h3 className="technology__body-content-title h3-text">
                {tech[index].name}
              </h3>
              <p className="technology__body-content-text main-text">
                {tech[index].description}
              </p>
            </div>
          </div>
          <div className="technology__body-image">
            <img
              src={
                images[
                  `tech${(index + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                  })}Landscape`
                ]
              }
              alt={`technology-${tech[index].name}`}
              className="tech_image__landscape"
            />
            <img
              src={
                images[
                  `tech${(index + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                  })}Portrait`
                ]
              }
              alt={`technology-${tech[index].name}`}
              className="tech_image__portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
