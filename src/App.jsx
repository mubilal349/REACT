import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="nav">
      <nav className='navbar'>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blogs</a></li>
        </ul>
      </nav>
    <div className="App">
      <header className="header">
        <h1>Muhammad Bilal</h1>
        <p>Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate web developer with experience in building responsive and accessible websites using React, HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my work and skills.</p>
          </div>
          <div className="project-card">
            <h3>Todo App</h3>
            <p>A simple React app to manage tasks with local storage support.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammad <b>Bilal</b>. All rights reserved.</p>
      </footer>
      </div>
      </div>
  );
}

export default App;

