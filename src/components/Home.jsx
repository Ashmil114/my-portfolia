import React from 'react'
import  './Home.css'



const Home = () => {
  return (
    <div>
      <div className="h-screen bg-black ">
        <div className='lgbanner h-screen flex-shrink-0 text-white flex flex-col items-center justify-center lg:justify-normal '>
            <h1 className='text-[100px] font-[600] invisible lg:visible -mt-10'>...</h1>
            <h1 className='text-[40px] font-[400] md:text-[80px] lg:text-[100px] md:-ml-[50px]  lg:-ml-[330px]'>HELLO,<span className='text-[#EBFF00]'>I'M</span></h1>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] md:-mr-[100px] lg:-mr-[80px]'>ASHMIL K</h1>
            <h1 className='lg:text-[22px] md:text-[12px] text-[10px]'>FULLSTACK DEVELOPER // PYTHON DEVELOPER</h1>
            <a href="#about"><button className='bg-white text-black text-center font-semibold lg:font-bold outline-none hover:bg-[#EBFF00] hover:text-white w-[80px] h-[30px] rounded-[100px] mt-[50px]  md:w-[80px] md:h-[35px] md:rounded-[100px] md:mt-[50px] lg:w-[198px] lg:h-[84px] lg:rounded-[100px] lg:mt-[50px]'>MORE</button></a>
            {/* <svg className='invisible lg:visible ' xmlns="http://www.w3.org/2000/svg" width="4" height="160" viewBox="0 0 4 160" fill="none"><path d="M2 0V160" stroke="#EBFF00" stroke-width="4"/></svg> */}
        </div>
      </div>
    </div>
  )
}

export default Home

