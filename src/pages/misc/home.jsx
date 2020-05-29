import React from "react";
import { Link } from "react-router-dom";

const home = () => (
  <>
    <h2>Pricebook Admin Sections</h2>

    <li>
      <ul>
        <Link to="/categories">
          <p>go to categories</p>
        </Link>
      </ul>
      <ul>
        <Link to="/services">
          <p>go to services</p>
        </Link>
      </ul>
      <ul>
        <Link to="/materials">
          <p>go to materials</p>
        </Link>
      </ul>

      <ul>
        <Link to="/equipment">
          <p>go to equipment</p>
        </Link>
      </ul>
      <ul>
        <Link to="/catalog-create">
          <p>go to catalog create</p>
        </Link>
      </ul>
      <ul>
        <Link to="/service-create">
          <p>go to service create</p>
        </Link>
      </ul>
    </li>
    <li></li>
    <h2>Pricebook Native Sections</h2>

    <li>
      <ul>
    <Link to="/native-catalog">
      <p>go to native catalog</p>
    </Link>

      </ul>
      <ul>
      <Link to="/native-categories">
      <p>go to native categories</p>
    </Link>
      </ul>
      <ul>
      <Link to="/native-subcategories">
      <p>go to native subcategories</p>
    </Link>
      </ul>
      <ul>
      <Link to="/native-items">
      <p>go to native items</p>
    </Link>
      </ul>
      <ul>
      <Link to="/native-item">
      <p>go to native item</p>
    </Link>
      </ul>



    </li>

    
   
  </>
);

export default home;
