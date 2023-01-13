import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './style.css'
// import ShowLocationWithRouter from './nav-info'

const Home = () => <div>Home</div>
const About = () =>
  <div>
    About
    {/*<ShowLocationWithRouter />*/}
  </div>
const BlogPosts = () => <div>BlogPosts</div>
const NotFound = () => <div>404</div>

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>
            <NavLink to="/about"
                     className={({ isActive }) => isActive ? "is-active" : undefined}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog-posts"
                     style={({ isActive }) => isActive ? { color: "green" } : undefined}>
              BlogPost
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    )
  }
}

export default Routing
