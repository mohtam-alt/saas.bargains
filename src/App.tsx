import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PartnerDashboard } from './pages/PartnerDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="partner/dashboard" element={<PartnerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;