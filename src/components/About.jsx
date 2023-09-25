import React from 'react'
import avar from '../assets/images/Ellipse 1.png'



const About = () => {
  return (
    <div  >
        <div className='h-fit ' id='about'>
          <h1 className='text-[100px] font-[600] invisible lg:visible absolute text-center w-full -mt-6'><span className='text-[#8D8D8D]'>.</span>..</h1>
          <div className='lg:flex w-full min-h-screen'>
          {/* <svg className='ml-[17.45%]  invisible lg:visible  absolute' xmlns="http://www.w3.org/2000/svg" width="440" height="150" viewBox="0 0 440 150" fill="none"><path d="M438 0V52H2V280" stroke="#EBFF00" stroke-width="4"/></svg> */}
              <div className='lg:w-[50%]  lg:h-screen lg:flex lg:justify-center lg:flex-col min-h-screen flex relative'>
                  <h1 className='lg:text-[360px] lg:font-[600]  text-[#EBFF00] lg:ml-[1rem] lg:p-1 text-[100px] lg:relative  ml-3 md:text-[150px] absolute bottom-0' data-aos="fade-right" data-aos-duration="1000" >01</h1>
                  <h1 className='lg:text-[40px] lg:-mt-[7rem] lg:ml-[7rem] text-[40px] w-full lg:relative  flex justify-center lg:justify-normal mt-9 ' data-aos="fade-up" data-aos-duration="1000">ABOUT ME</h1>
                  {/* <svg className='lg:ml-[34%] invisible lg:visible ' xmlns="http://www.w3.org/2000/svg" width="4" height="192" viewBox="0 0 4 192" fill="none"><path d="M2 0V192" stroke="#EBFF00" stroke-width="4"/></svg> */}
              </div>
              <div className='lg:w-[50%]  lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center lg:relative absolute -bottom-[75%]   lg:-bottom-0 flex  flex-col w-full  items-center ' data-aos="fade-up" data-aos-duration="2000">
                  <img src={avar} alt=""  className='lg:w-[314px] lg:h-[283px] lg:m-5 w-[224px] h-[203px] mb-2 mt-2 p-4 md:w-[284px] md:h-[253px] md:m-[1rem]  '/>
                  <h1 className='lg:m-5 mt-3 ml-8 mr-8 mb-3 text-justify md:m-[1rem] text-[10px] lg:text-[20px] md:text-[15px]'>I'm a full stack developer with a passion for creating dynamic and responsive web applications . I'm constantly looking for ways to integrate ML algorithms into my projects and improve the user experience .with my skills and experience.</h1>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About


