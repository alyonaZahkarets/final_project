
import Header from '../Header/Header';
import Modern from '../Modern/Modern';
import Services from '../Services/Services';
import About from '../About/About';
import Complited from '../Complited/Complited';
import Testimonials from '../Testimonials/Testimonials';
import LatestNews from '../LatestNews/LatestNews';
// import Footer from '../Footer/Footer';
// import Modern from '../Modern/Modern';




const Layout = () => {
    return (
      <div>
        <Header />
        <Modern />
        <Services/>
        <About />
        <Complited />
        <Testimonials />
        <LatestNews/>
      </div>
    );
  };
  
  export default Layout;