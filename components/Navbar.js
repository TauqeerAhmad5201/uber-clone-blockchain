import React from 'react'
import Image from 'next/image';
import avatar from '../temp/avatar.png'

const style = {
    wrapper : `h-16 w-full bg-black text-white flex md:justify-around items-center px-60`
}

export default function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>
            <p>Uber</p>
            <div className="style menuItem">Ride</div>
            <div className="style menuItem">Drive</div>
            <div className="style menuItem">More</div>
        </div>
      </div>
      <div className={style.rightMenu}>
      <div className={style.menuItem}>Help</div>
      <div className={style.menuItem}>BooMName</div>
      <div className={style.userImageContainer}></div>
<Image src={avatar} width={40} height={40}/>
      </div>
      <div>0x00000....0000</div>
    </div>
  )
}
