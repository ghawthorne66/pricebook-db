import React from 'react';

import { Link } from 'react-router-dom'

const Shop= () => (
  <>

<h2>Shop Page</h2>
<Link to='about'><p>go to about</p></Link>
<Link to='shop'><p>go to shop</p></Link>
<Link to='page2'><p>go to page 2</p></Link>
<Link to='page3'><p>go to page 3</p></Link>

</>

)
    
export default Shop;