// Import Libraries
import React from 'react';
import Header from './header';
import Footer from './footer';
import List from './list';
import "./App.css";

// Create component
function App(){
  return (
    <div >
      <center>
    <h1>Hello React</h1>
    
    
    <Header />
    <List /> 
    <Footer />
      </center>
    </div>
  );
}

// Export Default
export default App;
