
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className='App'>
            <Header />
            <Register />
            <Login />

        </div>
    );
}

export default App;
