import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import wpp from "../../../public/whatsapp.png"
import mail from "../../../public/mail.png"
import linked from "../../../public/linkedin.png"
import git from "../../../public/github.png"
import ytube from "../../../public/youtube.png"

const medias = [
    {
      "name": wpp,
      "url": "https://wa.me/+94774782724"
    },
    {
      "name": mail,
      "url": "mailto:soizsinghe@gmail.com"
    },
    {
      "name": linked,
      "url": "https://www.linkedin.com/in/sohan11/"
    },
    {
      "name": git,
      "url": "https://github.com/soiz11"
    },
    {
      "name": ytube,
      "url": "https://www.youtube.com/@angletheeta"
    }
  ]

    


const Social = () => {
  return (
    <div className='flex justify-between w-[80%] mt-4 xs:mt-5'>
        { medias.map((media,index)=>(
            <Link href={media.url} target="_blank" key={index} className='flex items-center justify-center h-[20px] w-[20px] xs:h-[25px] xs:w-[25px] sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px] rounded-full bg-[#ededed] shadow-xl border-2 border-[white]'>
                <Image src={media.name} className='w-[10px] xs:w-[15px] h-[10px] sm:w-[20px] xs:h-[15px] sm:h-[20px] lg:w-[30px] lg:h-[30px]'/>
            </Link>
        ))}
    </div>
  )
}

export default Social