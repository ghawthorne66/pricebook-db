import React from 'react'

import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import Page4 from './page4'

const Page3 = () => {
const {coolParam } = useParams();
  return (

  <>
<h2>Page 3</h2>
<p>This is the url param: {coolParam} </p>
<Link to='/'>
  <p>go to Home</p>
  </Link>

  <form action="text">
    <input type="text"/>
  </form>
</>
  );
  }
    
export default Page3

