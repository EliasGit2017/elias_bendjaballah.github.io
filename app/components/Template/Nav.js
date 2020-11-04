import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/catto.jpg`} alt="" />
      </Link>
      <header>
        <h2>Elias Bendjaballah</h2>
        <p><a href="mailto:elias.bendjaballah@gmail.com">elias.bendjaballah@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>My name is Elias bendjaballah.
        I am a <a href="https://www.sorbonne-universite.fr/">Sorbonne Université</a> student,
        learning computer science and passionate about Decision Making, Complexity theory and Algorithmic game theory.
        I am open to every opportunity in the fields of Machine Learning, Data Science and Artificial Intelligence.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Elias Bendjaballah <Link to="/">azbendjaballah.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
