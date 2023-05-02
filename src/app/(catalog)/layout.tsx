import Image from 'next/image'
import { type ReactNode } from 'react'
import bestGearMobile from './image-best-gear-mobile.jpg'

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <div className="mb-32 flex flex-col gap-10">
        <div className="overflow-hidden rounded-lg">
          <Image src={bestGearMobile} alt="" />
        </div>
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold uppercase leading-none tracking-wide">
            Bringing you the <span className="text-orange-500">best</span> audio
            gear
          </h2>
          <p className="font-medium leading-6 text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  )
}
