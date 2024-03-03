import React, { useEffect, useState } from "react";
import InvestorPage from "./components/InvestorPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '../src/index.css'
import {Register} from "./components/Register";
import SearchBar from "./components/SearchComponent/SearchBar";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import userAtom from "../Atoms/CurrentUser";
import { useRecoilValue } from "recoil";
import LogoutButton from "./components/LogoutButton.jsx";
// import CreatePost from "./components/createPost.jsx";
import UpdateProfilePage from "./components/UpdateProfilePage.jsx";
  // ... other imports remain the same
function App() {
  const user = useRecoilValue(userAtom);

 return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/Register"/>}/>
          <Route path="/Register" element={ <Register/>}/>
          <Route path="/Investor" element={user ? <InvestorPage/> : <Navigate to="/"/>}/>
          <Route path="/SearchBar" element={user ? <SearchBar/> : <Navigate to="/"/>}/>
          <Route path="/UserPage" element={ user ? <UserPage /> :(<Navigate to="/" />)}/>
          <Route path="/updateUser" element={user ?  <UpdateProfilePage/>  : <Navigate to="/"/>}/>
          {/* <Route path="/CreatePage" element={CreatePost}/> */}
          {user}
        </Routes>
        {/* {user &&<CreatePost/>} */}
      </Router>
    </>
 );
}









export default App;