import Router from "./app/Router";
import { GlobalStyle } from "../src/app/style/createGlobal.styles";
import MusicButton from "./components/MusicButton/MusicButton";

const App = () => (
  <>
    <GlobalStyle />
    <Router />
    <MusicButton /> {/* Coloca el MusicButton dentro del Router */}
  </>
);

export default App;
