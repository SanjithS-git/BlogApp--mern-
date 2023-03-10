import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth"
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  return (
  <React.Fragment>
  <header>
  <Header/>
  </header>
  <main>
  <Routes>
  <Route path="/auth" element={<Auth/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/myBlogs" element={<UserBlogs/>}/>
  <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
  <Route path="/blogs/add" element={<AddBlog/>}/>
   </Routes>
  
  </main>
  
  
  
  </React.Fragment>

  )
}

export default App;
