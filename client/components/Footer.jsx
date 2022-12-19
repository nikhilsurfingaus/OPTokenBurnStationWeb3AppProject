import React from 'react'

const style = {
    copyright: `absolute bottom-0 w-full h-16`,
    copyText: `text-center text-xs opacity-40`,
}

function Footer() {
  return (
    <div className={style.copyright}>
        <p className={style.copyText} >
        Developed by Nikhil Naik, WaveFlightSimulation © All Rights Reserved.
        </p>
    </div>

  )
}

export default Footer