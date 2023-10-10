import Upload from './Pages/Upload';
import Dashboard from './Pages/Dashboard';
import Video from './Pages/Video';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/video" element={<Video/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
