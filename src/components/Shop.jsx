import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { FaHeart } from "react-icons/fa";



  const shop = [
    {
      nom : "Jeans",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "1 500 F CFA",
      image: "/jeans.png",
    },
    {
      nom : "Men-short",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "1 300 F CFA",
      image: "/men-short.png",
    },
    {
      nom : "Shirt",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "2 000 F CFA",
      image: "/shirt.png",
    },
    {
      nom : "Jackets",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "1 200 F CFA",
      image: "/jackets.png",
    },
    {
      nom : "Shirt",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "2 000 F CFA",
      image: "/shirt.png",
    },
    {
      nom : "Jeans",
      description : "Beautiful jeans with every color you like ?  Make your choice." ,
      prix: "1 500 F CFA",
      image: "/jeans.png",
    },
  ]

const Shop = () => (
  <div className="px-6 py-[60px]">
    <div className="grid grid-cols-3 gap-[20px]">
      {/* card first*/}
      {
        shop.map((item, id) =>(
          <div key="id" className="bg-[#745d81] rounded-e-[10px]  shadow-md ">
            {/* image */}
            <div className="flex ">
              <div className="flex items-center">     
                <Image alt="Jeans" src={item.image} width={180} height={80} className="w-full h-full" />
              </div>
              {/* text caractéristique */}
              <div className="p-4 bg-white flex flex-col gap-[20px] rounded-e-[10px]">
                {/* title objet */}
                <div className="border-b-[#052E9C] border-b">
                  <p className="text-[24px] font-semibold">{item.nom}</p>
                </div>        
                {/* caractérisque objets */}
                <div className="flex flex-col gap-[20px]">
                  {/* text caractéristique */}
                  <div className="">
                    <p className="text-[19px]">
                      {item.description} 
                    </p>
                  </div>
                  {/* price objet */}
                  <div className="flex items-center justify-between">
                    <p className="text-[19px] font-medium">{item.prix}</p>
                    <div className="">
                      <FaHeart className="text-[#052E9C]"/>
                    </div>
                  </div>
                </div>
                {/* button */}
                <div className="button">
                  <button className="" type="button">Achetez</button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default Shop
