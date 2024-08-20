import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList'; // Assuming you have a separate BookList page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
