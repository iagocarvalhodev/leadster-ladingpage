import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

interface CardProps {
  author: string
  title: string
}

export const Card = ({ author, title }: CardProps) => {
  return (
    <div className="text-zinc-700 cursor-pointer rounded-2xl shadow-xl bg-white group">
      <div className="rounded-t-2xl group-hover:bg-textSecundary relative transition">
        <Image
          src="/thumbnail.png"
          width={500}
          height={500}
          alt="thumbnail"
          className="group-hover:opacity-70"
        />
        <FaPlay
          className="absolute group-hover:flex top-[37.5%] left-[42%] drop-shadow-2xl transition hidden"
          size={58}
          color="#fff"
        />
      </div>
      <div className="p-5 rounded-b-2xl">
        <span className="font-extrabold group-hover:text-textSecundary">
          {title} {author}
        </span>
      </div>
    </div>
  )
}
