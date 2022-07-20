import './App.css';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Main from './Pages/Main';
import Home from './Pages/Home';
import Editpost from './Pages/Editpost';
import MyPublishedPosts from './Pages/MyPublishedPosts';
import MyDraftedPosts from './Pages/MyDraftedPosts';
import PublicPosts from './Pages/PublicPosts';
import ProtectedRoute from './Pages/ProtectedRoute';
import PublicRoute from './Pages/PublicRoute';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <Main />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute><Signup />
          </PublicRoute>} />

        <Route path="/posts/me" element={
          <ProtectedRoute >
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/posts/me/published" element={
          <ProtectedRoute >
            <MyPublishedPosts />
          </ProtectedRoute >
        } />
        <Route path="/posts/me/drafted" element={
          <ProtectedRoute >
            <MyDraftedPosts />
          </ProtectedRoute>} />
        <Route path="/posts/public" element={
          <ProtectedRoute >
            <PublicPosts />
          </ProtectedRoute >
        } />
        <Route path="/post/:id/edit" element={
          <ProtectedRoute >
            <Editpost />
          </ProtectedRoute >} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
