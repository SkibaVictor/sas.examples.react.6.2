import './App.css';
import React from 'react';
import News from './components/news/news.jsx';

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12" id="clock_id">
            <News newsSectionTitle="First news section" />
            <News newsSectionTitle="Second news section" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

