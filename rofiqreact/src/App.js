import './index.css' 
import Nav from './components/Nav'
import Home from './components/Home'
import HeroImage from './components/HeroImage';
import ServiceLeft from './components/Services/ServiceLeft'
import ServiceRight from './components/Services/ServiceRight'
import Intro from './components/Testimonials/Intro'
import Testimonials from './components/Testimonials/Testimonials'
import PricingFirstRow from './components/Pricing/PricingFirstRow'
import PricingSecondRow from './components/Pricing/PricingSecondRow'
import Contact from './components/Contact/Contact'
import FooterPart from './components/footer/FooterPart';


function App() {
  return (
    <div className="Main">
      <Nav /> 
      
      <div className='Hero_section flex py-[100px] bg-[#f1f5f9]'>
        <Home /> 
        <HeroImage /> 
      </div>

      <div className='service_section flex items-center py-[100] bg-[#e2e8f0]'>
        <ServiceLeft /> 
        <ServiceRight /> 
      </div> 

      <div className='service_section py-[100]'>
        <Intro /> 
        <Testimonials /> 
      </div> 

      <div className='pricing_section items-center py-[30px] bg-[#e2e8f0]'>
        <PricingFirstRow /> 
        <PricingSecondRow/>
        
      </div> 

      <div className='contact_section relative flex justify-center items-center h-[60vh] pt-[300px] bg-[#e2e8f0]'>

        <div className='absolute top-[180px] w-[100%] h-[45vh] bg-green-600 -z-100'>
        
        </div>
        <Contact /> 
      </div>

        
        

        <div className='footer_section flex justify-center items-center h-[60vh] pt-[300px] bg-[#e2e8f0]'>
          <FooterPart/>
        </div>
          
      
    </div> 
  );
} 



export default App;
