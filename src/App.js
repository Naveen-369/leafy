//Importing all the Components
import './App.css';
import Header from './HeaderComponent/Header.js';
import SearchBox from './SearchBoxComponent/SearchBox.js';
import Footer from './FooterComponent/Footer.js';
import Containercontent from './ContentComponent/Containercontent.js';
//Returning the Function
function App() {
  return (
    <div className="App">
      <Header content="Leafy" />
      <SearchBox />
      <br />
      <Containercontent/>
      <br /><br /><br />
      <Footer />  
    </div>
  );
}

export default App;
