import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';

function App() {
    return (
        <div className="App">
            <Router>
                <MainComponent />
            </Router>
        </div>
    );
}

export default App;
