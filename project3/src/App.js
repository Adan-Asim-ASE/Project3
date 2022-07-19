import './App.css';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Home from './Pages/Home';
import Editpost from './Pages/Editpost';
import MyPublishedPosts from './Pages/MyPublishedPosts';
import MyDraftedPosts from './Pages/MyDraftedPosts';
import PublicPosts from './Pages/PublicPosts';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/Me/Published" element={<MyPublishedPosts />} />
        <Route path="/Home/Me/Drafted" element={<MyDraftedPosts />} />
        <Route path="/Home/PublicPosts" element={<PublicPosts/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Post/Edit/:id" element={<Editpost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
