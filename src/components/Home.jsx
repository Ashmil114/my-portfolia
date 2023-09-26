import React from 'react'
import  './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();




const Home = () => {
  return (
    <div>
      
      <div className="h-fit bg-black ">
        <div className='lgbanner h-screen flex-shrink-0 text-white flex flex-col items-center  lg:justify-normal ' data-aos="zoom-in" data-aos-duration="1000"   data-aos-once="false">
            <h1 className='text-[100px] font-[600] invisible lg:visible -mt-10'>...</h1>
            <h1 className='text-[40px] font-[400] md:text-[80px] lg:text-[100px] md:-ml-[50px]  lg:-ml-[330px]' data-aos="fade-right" data-aos-duration="2000" data-aos-once="false">HELLO,<span className='text-[#EBFF00]'>I'M</span></h1>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] md:-mr-[100px] lg:-mr-[80px]' data-aos="fade-left" data-aos-duration="2000" data-aos-once="false">ASHMIL K</h1>
            <h1 className='lg:text-[22px] md:text-[12px] text-[10px]' data-aos="zoom-in" data-aos-duration="4000"  data-aos-once="false">FULLSTACK DEVELOPER // PYTHON DEVELOPER</h1>
            <a href="#about"><button className='bg-white text-black text-center font-semibold lg:font-bold outline-none hover:bg-[#EBFF00] hover:text-white w-[80px] h-[30px] rounded-[100px] mt-[50px]  md:w-[80px] md:h-[35px] md:rounded-[100px] md:mt-[50px] lg:w-[198px] lg:h-[84px] lg:rounded-[100px] lg:mt-[50px]'>MORE</button></a>
        </div>
      </div>
      
    </div>
  )
}

export default Home

