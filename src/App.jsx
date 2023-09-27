import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

function App() {
  const [user, setUser] = useState(false);

  //* create Login Funtion
  const login = () =>{
    setUser(true);
  }

  //* create logout Funtion
  const logout = () =>{
    setUser(false);
  }
  return (
    <>
      <Router>
        <Navbar user={user} login={login} logout={logout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={
            <ProtectedRoute user={user}>
              <Product />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App

//* Create Protected Route Function 
export const ProtectedRoute = ({user, children}) => {
  if(user){
    return children
  }else{
    return <Navigate to={'/'}/>
  }
}