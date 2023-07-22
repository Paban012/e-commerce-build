import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './router';




function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', color: 'purple' }}>Loading</h1>}>
        <Router>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              )
            })}
          </Routes>
        </Router>
      </Suspense>

    </div>
  );
}

export default App;
