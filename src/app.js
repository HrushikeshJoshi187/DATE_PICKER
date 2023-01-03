import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App()
{
  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<HomePage/>} />
          <Route path='/hello_world_cube' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage()
{
  {
    return (
      <div id='home_page'>
        <nav id='navigation'>
          <ul id='navigation_links'>
            <li id='navigation_link_home'>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li id='navigation_link_hello_world_cube'>
              <Link to='/hello_world_cube'>
                hello_world_cube
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
