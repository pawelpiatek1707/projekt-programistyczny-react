import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {LogIn, Images} from './pages'
import './index.css';
import 'antd/dist/antd.css'
import { ProtectedRoute } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="images" element={
        <ProtectedRoute>
          <Images/>
        </ProtectedRoute>
      } />
    </Routes>
  </BrowserRouter>
);

