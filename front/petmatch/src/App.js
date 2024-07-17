import logo from "./Assets/logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
            </header>
            <div>
                <Home/>
            </div>
        </div>
        
    );
}

export default App;
