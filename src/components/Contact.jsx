import React from 'react'
import { BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className='min-h-screen '>
        <h1 className='text-[100px] font-[600] invisible lg:visible absolute text-center w-full -mt-6'>..<span className='text-[#8D8D8D]'>.</span></h1>
        <div className='lg:flex w-full min-h-screen'>
        {/* <svg className='ml-[16%]  invisible lg:visible  absolute' xmlns="http://www.w3.org/2000/svg" width="804" height="134" viewBox="0 0 804 134" fill="none"><path d="M802 0V52H2V284" stroke="#EBFF00" stroke-width="4"/></svg> */}
            <div className='lg:w-[50%]  lg:h-screen lg:flex lg:justify-center lg:flex-col min-h-screen flex '>
                <h1 className='lg:text-[360px] lg:font-[600]  text-[#EBFF00] lg:ml-[1rem] lg:p-1 text-[100px] lg:relative absolute -bottom-[300%] lg:bottom-0 ml-3 md:text-[150px]'>03</h1>
                <h1 className='lg:text-[40px] lg:-mt-[7rem] lg:ml-[7rem] text-[40px] w-full lg:relative  flex justify-center lg:justify-normal mt-9 '>CONTACT ME</h1>
                {/* <svg className='lg:ml-[34%] invisible lg:visible ' xmlns="http://www.w3.org/2000/svg" width="4" height="192" viewBox="0 0 4 192" fill="none"><path d="M2 0V192" stroke="#EBFF00" stroke-width="4"/></svg> */}
            </div>
            <div className='lg:w-[50%]  lg:h-screen lg:flex lg:flex-col lg:items-center lg:justify-center lg:relative ' >
                
              <div className='lg:flex lg:gap-4  lg:justify-normal lg:w-auto w-full flex absolute  justify-center gap-4  top-[350%] lg:top-[50%]'>
                  <div className='lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]'>
                    <a href="https://www.instagram.com/asshhmil/"><BsInstagram className='text-black lg:text-[70px] text-[50px]'/></a>
                  </div>
                  <div className='lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]'>
                    <a href="https://www.linkedin.com/in/ashmilk"><BsLinkedin className='text-black lg:text-[70px] text-[50px]'/></a>
                  </div>
                  <div className='lg:w-[70px] lg:h-[70px] text-center w-[50px] h-[50px]'>
                    <a href="https://github.com/ashmil114"><BsGithub className='text-black lg:text-[70px] text-[50px]'/></a>
                  </div>
                  
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
