import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Nopage from './pages/Nopage'
import Counter from '../components/functional-comp'
import Profile from '../components/general-comp'
import Loginform from '../components/login-form'
import Gallery from '../components/Gallery'
import Comp from '../components/comp'
import ProductCard from '../components/ProductCard'
import Task from '../components/Task'
import FruitLists from '../components/FruitList'
import MyForm from '../components/Myform' 
import NameCourse from '../components/name and course'
import CountOne from '../components/count'
import FunctionalComponent from '../components/FunctionalComponent' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import reactDom from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import About from '../components/comp'
import Count from '../components/count'
import StudentCard from '../components/name and course'
import ComponentParent from '../components/ParentComponent';

function App() {
  // const [username1, setUsername1] = useState('');

  // const SubmitHandler = (e) => {
  //   e.preventDefault(e)
  //   console.log('Submitted');
    
  // }

  function FauriteColor() {
    const [color, setColor] = useState('red');
  }

  return (
    <>
      <h1>My favourite color is. {color}</h1>
      {/* <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={username1}
            placeholder='Enter your name '
            onChange={(e) => {
              e.preventDefault(e)
              setUsername1(e.target.value)
              console.log(e.target.value);
              
            }}
          /> <br />
          <button  onClick={SubmitHandler}>Submit</button>
        </label>
      </form> */}
    </>
  )
}

export default App

