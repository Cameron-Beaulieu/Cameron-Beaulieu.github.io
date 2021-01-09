import './App.css';
import ProjectStack from './Components/Project Stack';
import NavBar from './Components/Nav-Bar';
import Main from './Components/Main';
import Skills from './Components/Skills'
import InterestStack from './Components/InterestStack';
import ClubsStack from './Components/Clubs and Other Work';
import Head from './Components/Head';

function App() {
  return (
    <>
    <Head />
    <NavBar />
    <Main />
    <Skills />
    <ProjectStack />
    <InterestStack />
    <ClubsStack/>
    </>

  );
}

export default App;
