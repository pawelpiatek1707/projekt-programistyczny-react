import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {Home, LogIn, Images} from './pages'
import './index.css';
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="images" element={<Images />} />
    </Routes>
  </BrowserRouter>
);

