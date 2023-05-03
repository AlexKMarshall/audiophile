import Image from 'next/image'
import Link from 'next/link'
import { CenterContent } from '~/components/CenterContent'
import xx99MarkTwoPreviewMobile from './xx99-mk2-image-category-page-preview-mobile.jpg'

export default function CategoryPage({
  params,
}: {
  params: { categoryName: string }
}) {
  return (
    <div>
      <div className="bg-black py-8 text-white sm:py-24">
        <h1 className="text-center text-3xl font-bold uppercase tracking-widest">
          {params.categoryName}
        </h1>
      </div>
      <CenterContent>
        <div className="flex flex-col gap-32 py-16">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-lg">
              <Image src={xx99MarkTwoPreviewMobile} alt="" />
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="text-sm uppercase tracking-[0.7em] text-orange-500">
                New product
              </p>
              <h2
                id="xx99-mark-two-headphones"
                className="text-3xl font-bold uppercase tracking-[0.03em]"
              >
                XX99 Mark II Headphones
              </h2>
              <p className="font-medium leading-relaxed text-black/50">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Link
                id="xx99-mark-two-headphones-link"
                href="/product/xx99-mark-two-headphones"
                aria-labelledby="xx99-mark-two-headphones-link xx99-mark-two-headphones"
                className="bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                See product
              </Link>
            </div>
          </div>
        </div>
      </CenterContent>
    </div>
  )
}
