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
import './index.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import About from '../components/comp'
import Count from '../components/count'
import StudentCard from '../components/name and course'
import ComponentParent from '../components/ParentComponent';

function App() {

  const [Color, setColor] = useState('red');

  const handleClick = () => {
    setColor("green"); // Change to green when clicked
  };
  return (
    <>
      <h1>Color is {Color}</h1><br />
      <button
      onClick={handleClick}
      style={{ backgroundColor: Color, color: "white", padding: "10px 20px" }}
    >
      Click Me
    </button>
      <button type='button'
        onClick={()=>{setColor('blue')}}
      >
        Blue
      </button>
      <button type='button'
        onClick={()=>{setColor('green')}}
      >
        Green
      </button>
      <button type='button'
        onClick={()=>{setColor('yellow')}}
      >
        Yellow
      </button>
    </>
  )
  
}

export default App

