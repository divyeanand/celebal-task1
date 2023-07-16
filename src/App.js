import './App.css';
import MainPage from './Routes/MainPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>          
          <div className="container"></div>
            <Routes>
              <Route path="/" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
