import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";

function App() {

    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
