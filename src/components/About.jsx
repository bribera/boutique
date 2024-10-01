import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { CgReadme } from "react-icons/cg";

const About = () => {
  return (
    <div className="flex justify-between items-center px-6 py-[60px] bg-transparent">
      {/* text about */}
      <div className="flex flex-col flex-1 gap-10 ">
        {/* titre about */}
        <div className="">    
          <p className="text-[48px] font-semibold">
            What to know about us ?
          </p>
        </div>
        {/* text about */}
        <div className="">
          <p className="text-[28px] font-normal w-[548px] text-white/90">
          Plongez dans le monde exotisme avec notre cocktail au coco, 
          un mélange onctueux de lait de coco crémeux et de saveurs tropicales, idéal pour une évasion gustative.
          </p>
        </div>
         {/* bouton */}
         <div className="">
                <Link href="/boutique" className="w-[190px] gap-2 flex items-center button">              
                    <button className="text-[20px]" type="button"> Savoir plus ?</button>
                    <CgReadme className="text-[20px]"/>
                </Link>
            </div>
      </div>
      {/* image */}
      <div className="flex-1 w-full h-full">
        <Image alt="" src="/complet.jpg" width={400} height={400} className='w-full h-full' />
      </div>
    </div>
  )
}

export default About
