import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default App;
