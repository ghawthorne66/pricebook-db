import React from 'react';

import { Link } from 'react-router-dom'

const About = () => (
  <>

<h2>About Page</h2>
<Link to='/shop'><p>go to shop</p></Link>
<Link to='page2'><p>go to page 2</p></Link>
<Link to='/page3/:'><p>go to page 3</p></Link>

</>

)
    

export default About;