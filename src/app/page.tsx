import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-green-3 bg-gradient-to-t from-black from-15% lg:from-45% lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black">
            
            <Image
              src="/banner5.jpg"
              alt="The Witcher"
              fill={true}
              className="h-[65vh] object-cover object-top lg:h-[95vh]"
            />
          </div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">The Witcher</h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often proover more wicked than beasts.
          </p>
        </div>

        <div className="flex space-x-3">
          <button className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
            Play
          </button>

          <button className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
            More Info
          </button>
        </div>
      </main>
    </div>
  )
}
