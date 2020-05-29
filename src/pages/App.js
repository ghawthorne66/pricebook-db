import React from 'react';

import About from './misc/About'
import Shop from './misc/Shop'
import Categories from './pricebook-admin/categories/categories'
import Services from './pricebook-admin/categories/services'
import Materials from './pricebook-admin/categories/materials'
import Equipment from './pricebook-admin/categories/equipment'
import NativeCatalog from './pricebook-native/NativeCatalog'
import CatalogCreate from './pricebook-admin/CatalogCreate'
import ServiceCreate from './pricebook-admin/ServiceCreate'
import NativeCategories from './pricebook-native/NativeCategories'
import NativeSubCategories from './pricebook-native/NativeSubCategories'
import NativeItems from './pricebook-native/NativeItems'
import NativeItem from './pricebook-native/NativeItem'
import Page3 from './misc/page3'
import Page5 from './misc/page5'
import Home from './misc/home'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/materials" element={<Materials />} />
           <Route path="/categories" element={<Categories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/catalog-create" element={<CatalogCreate />} />
          <Route path="/service-create" element={<ServiceCreate />} />
          <Route path="/native-catalog" element={<NativeCatalog />} />
          <Route path="/native-categories" element={<NativeCategories />} />
          <Route path="/native-subcategories" element={<NativeSubCategories />} />
          <Route path="/native-items" element={<NativeItems />} />
          <Route path="/native-item" element={<NativeItem />} />
        
          <Route path="/page3/:param/*" exact element={<Page3 />} /> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
