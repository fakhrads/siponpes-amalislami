import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/BlogPage';
import Layout from "./pages/components/Layout";
import HomePages from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages/>} />
          <Route path='blogs' element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}