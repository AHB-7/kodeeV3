import { NavBar } from "./components/nav-bar";
import { Home } from "./pages/home";
import "@fontsource/teko";
import "@fontsource/teko/300.css";
import "@fontsource/teko/400.css";
import "@fontsource/teko/500.css";
import "@fontsource/teko/600.css";
import "@fontsource/teko/700.css";

function App() {
    return (
        <>
            <NavBar />
            <Home />
        </>
    );
}

export default App;
