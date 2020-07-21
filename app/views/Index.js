import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Personal academic journal</Link></h2>
          <p>Where you can find some informations about me, my work and some other more (or less) usefull things.</p>
        </div>
      </header>
      <p> Welcome to my academic journal, feel free to read about me <Link to="/about">here</Link>,
        or check any of my work, passion and even shenanigans {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
