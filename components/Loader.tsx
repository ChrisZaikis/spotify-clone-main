import Image from 'next/image'

const Loader = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col items-center pt-40 space-y-4">
        <span className="relative h-[250px] w-[400px] lg:h-[240px] lg:w-[550px]">
          <Image
            src="https://rb.gy/y9mwtb"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
      </div>
    </div>
  )
}

export default Loader
