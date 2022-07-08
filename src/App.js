import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";
const Phonebook = lazy(() => import('./Pages/Phonebook.js'));


function App() {
  
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Phonebook />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  ); 
};

export default App;