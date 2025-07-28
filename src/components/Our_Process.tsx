import React from 'react'

export default function Our_Process() {
  return (
    <div className='container-width mx-auto bg-[#F6F8FB] px-[15px] md:px-15 py-10 '>

    <div className="process-heading flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-9 md:gap-12">
        <div className="w-full md:w-1/2">
          <h2 className='text-black text-[48px] leading-[120%] font-normal '>Website Development Process</h2>
        </div>
        <div className="w-full  md:w-[36%]">
          <p className='text-[#AEAEAE] text-[16px] leading-[150%] font-normal '>We have highly professional team, which works systematically. Our expert team follows the steps to ensure deliver an error free website.</p>
        </div>
      </div>


   <div className="outer-process-step bg-white p-5">
  <div className="flex flex-col md:flex-row flex-wrap gap-[30px] pl-[30px]">

    {/* Inception - slightly bigger */}
    <div className='w-full md:w-[42%]'>
    <div className=" bg-gray-100 p-5 rounded-xl ">
      <div className="flex flex-col gap-4">
        <h4 className="text-[24px] font-normal text-black leading-[120%]">Inception</h4>
        <div className="h-[238px] rounded-xl overflow-hidden">
          <img src="/images/home_img/our-process/inception-img.jpg" alt="Inception" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </div>
    

    {/* Contract - slightly smaller */}
    <div className=' pl-[30px] w-full md:w-[55%]'>

      <div className=" bg-gray-100 p-5  rounded-xl  ">
      <div className="flex flex-col gap-4">
        <h4 className="text-[24px] font-normal text-black leading-[120%]">Contract</h4>
        <div className="h-[238px] rounded-xl overflow-hidden">
          <img src="/images/home_img/our-process/contract-img.jpg" alt="Contract" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </div>

    {/* Build - large */}
    <div className=' w-full md:w-[47%]'>
    <div className="bg-gray-100 p-5 rounded-xl">
      <div className="flex flex-col gap-4">
        <div className='flex justify-between items-center'>
          <h4 className="text-[24px] font-normal text-black leading-[120%]">Build</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full">Prototype/Creative</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full">Quality Assurance</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full">Development</span>
        </div>
        </div>
        <div className="h-[238px] rounded-xl overflow-hidden">
          <img src="/images/home_img/our-process/build-img.jpg" alt="Build" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </div>
    

    {/* UAT + Launch - small */}
    <div className='w-full md:w-[50%]'>
    <div className=" bg-gray-100 p-5 rounded-xl">
      <div className="flex flex-col gap-4">
        <h4 className="text-[24px] font-normal text-black leading-[120%]">UAT + Launch</h4>
        <div className="h-[238px] rounded-xl overflow-hidden">
          <img src="/images/home_img/our-process/launch-img.jpg" alt="Launch" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </div>
    

  </div>
</div>


    </div>

    </div>
  )
}
