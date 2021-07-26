import Footer from "./components/Footer";
import Title from "./components/Title";
import Gallery from "./components/Gallery";

import s from './App.module.css'

function App() {
  return (
    <div className={s.App}>
        <Title />
        <Gallery />
        <Footer />
    </div>
  );
}

export default App;
