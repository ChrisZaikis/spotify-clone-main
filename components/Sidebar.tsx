import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from '@heroicons/react/solid'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { RiCompassFill } from 'react-icons/ri'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <section className="fixed top-0 z-40 flex h-screen w-[90px] flex-col items-center space-y-8 bg-black p-4">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
        <RiCompassFill className="text-2xl sidebarIcon" />
        <FaMicrophoneAlt className="ml-1 sidebarIcon" />
        <ChartBarIcon className="sidebarIcon" />
        <ClockIcon className="sidebarIcon" />
        <DotsHorizontalIcon className="sidebarIcon" />
      </div>
    </section>
  )
}

export default Sidebar
