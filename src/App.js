import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.jsx'
import Video from './components/video.jsx'
import Character from './components/character'
import Ab from './components/abilities'
import Sp from './components/special.jsx'
import Ft from './components/footer.jsx'

function App() {
  return (
    <>
    <Nav/>
    <main>
        <Video/>
       <Character/>
       <Ab/>
       <Sp/>
       <Ft/>
        

       		 
    </main>
    </>
  );
}

export default App;
