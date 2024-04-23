//Importing all the Components
import Header from '../../Components/HeaderComponent/Header.js';
import SearchBox from '../../Components/SearchBoxComponent/SearchBox.js';
import Footer from '../../Components/FooterComponent/Footer.js';
import Containercontent from '../../Components/ContentComponent/Containercontent.js';
//Returning the Function
function Services() {
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

export default Services;
