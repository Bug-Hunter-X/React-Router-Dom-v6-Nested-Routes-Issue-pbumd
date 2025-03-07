```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Outlet/>
    </div>
  );
}

function About() {
  return (
    <div>About</div>
  );
}

function Outlet(){
    let location = useLocation();
    return(
        <div>Current location is: {location.pathname}</div>
    );
}
```