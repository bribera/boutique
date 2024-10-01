import React from 'react'
import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs";


const menu = [
    {
        path: "/accueil",
        name: "Accueil",
    },
    {
        path: "/boutique",
        name: "Boutique",
    },
    {
        path: "/contact",
        name: "Contact",
    },
]

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 text-center bg-white " >
        {/* logo */}
      <div className="">
        <p className=" h1">Joy</p>
      </div>
        {/* menu */}
      <div className="flex items-center justify-between gap-x-20">
           <div className="flex justify-center gap-20">
            {
              menu.map((item, id)=> (
                <div className="" key={id}>
                  <div className="">
                    <Link href= {item.path} className="font-500 text-[30px] text-first font-semibold hover:text-[#052E9C]">
                      <span className="">
                        {item.name}
                      </span>
                    </Link>
                  </div>
                </div>
            ) 
              )
            }
           </div>
           {/* button */}
           <div className="flex items-center gap-2 button">
            <button type="button" className="">Commandez</button>
              <BsWhatsapp />
           </div>
      </div>
    </div>
  )
}

export default Header
