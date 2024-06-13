import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './screens/MainPage/MainPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
