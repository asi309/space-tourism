import { Link } from 'react-router-dom';

import { Navbar } from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home app__container">
      <Navbar />
      <div className="home__container">
        <div className="home__body">
          <article>
            <h5 className="home__article-subhead h5-text">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="home__article-head h1-text">SPACE</h1>
            <p className="home__article-body main-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
        </div>
        <div className="home__explore">
          <Link to="/destination">
            <div className="home__explore-circle">
              <h4 className="h4-text">EXPLORE</h4>
            </div>
            <div className="home__explore-circle-hover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
