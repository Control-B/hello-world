import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="text-center">React App</h1>
            </div>
            <div className="card-body">
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading text-center">Hello, World!</h4>
                <p className="text-center">Welcome to my minimal React application with Bootstrap styling.</p>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Click Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 