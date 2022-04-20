import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from '../assets/images/main.svg';

// Router
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info container */}
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cum
            odio molestias aut sit temporibus fugit tenetur accusantium delectus
            voluptas facilis consectetur minus voluptates, alias ratione
            blanditiis quis ipsum consequuntur!
          </p>
          <Link to='/register'>
            <button className='btn btn-hero'>Login/Register</button>
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
