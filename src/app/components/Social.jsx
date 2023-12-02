import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import wpp from "../../../public/whatsapp.webp"
import mail from "../../../public/mail.webp"
import linked from "../../../public/linkedin.webp"
import git from "../../../public/github.webp"
import ytube from "../../../public/youtube.webp"

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
    <div className='flex justify-between w-[80%] mt-5 xxs:mt-3 sm:mt-5 md:mt-7'>
        { medias.map((media,index)=>(
            <Link href={media.url} target="_blank" key={index} className='flex items-center justify-center h-[20px] w-[20px] xs:h-[25px] xs:w-[25px] sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px] rounded-full bg-[#ededed] shadow-xl border-2 border-[white]'>
                <Image alt='' src={media.name} className='w-[10px] xs:w-[15px] h-[10px] sm:w-[20px] xs:h-[15px] sm:h-[20px] lg:w-[30px] lg:h-[30px]'/>
            </Link>
        ))}
    </div>
  )
}

Social.displayName = 'Social';
export default Social