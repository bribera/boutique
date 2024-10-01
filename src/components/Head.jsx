import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Head = () => {
  return (
    <div className="pt-[60px] h-[83vh] flex justify-center bg-white mt-[10px]">
      <div className="flex flex-col justify-center md:items-start md:justify-between md:flex-row">
        {/* product */}
        <div className="relative flex-1 w-full h-full">
          <div className="absolute top-0 left-1">
            <Image src="/men-shoes.png" className="" width={170} height={170}/>
          </div>
            <Image alt="top" src="/top.jpg" width={400} height={400} className="w-full h-full" />
        </div>
        {/* text */}
        <div className="relative flex-1 w-full h-full">
          <div className="absolute bottom-0 right-0">
            <Image src="/shoes.png" className="" width={170} height={170} alt="woman-shoes"/>
          </div>
          <div className="flex h-full w-full justify-center flex-col gap-[50px] items-center flex-1 md:items-start">    
            {/* titre */}
            <div className="">
                <p className="text-[70px] grey-qo">Make a right choice</p>
            </div>
            {/* sous-titre */}
            <div className="px-6 md:px-0">
                <p className="text-[30px] text-center md:text-start">
                Découvrez des vêtements de qualité pour tous les âges. Trouvez le style qui vous convient, peu importe votre génération.
                </p>
            </div>
            {/* bouton */}
            <div className="">
                <Link href="/boutique">              
                    <button className="button text-[20px]" type="button">Faites votre choix</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
