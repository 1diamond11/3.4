import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Simple React App</h1>
          <p>Click on a user to view their comments</p>
        </header>
        <Routes>
          {/* Главная страница со списком пользователей */}
          <Route path="/" element={<HomePage />} />
          
          {/* Страница пользователя с комментариями */}
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
