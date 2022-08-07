import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import TinderCards from './component/TinderCards';

function App() {
  return (
    // JSX is a JavaScript syntax extension that allows you to wrtie HTML
    <>
    {/* Types of components
    1. Functional components
    2.Class components
   */}

    <Header />

    <TinderCards/>
     <Footer/>
           
    </>
  );
}

export default App;
