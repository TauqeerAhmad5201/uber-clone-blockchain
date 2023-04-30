import React from 'react'

const style = {
    wrapper : `h-16 w-full bg-black text-white flex md:justify-around items-center px-60`
}

export default function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>
            <p>Uber</p>
        </div>
      </div>
    </div>
  )
}
