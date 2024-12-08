import Image from 'next/image'
import React from 'react'

const Button = ({text, icon, classNames, textClass}) => {
  return (
      <button className={classNames}>
        <div className={`flex items-center justify-center gap-2`}>
            <span className={textClass}>{text}</span>
            <span><img src={icon} width={20}/></span>

        </div>
      </button>
  )
}

export default Button