import React from 'react'

const Button = ({
  icon,
  text,
  className,
}: {
  icon?: string
  text: string
  className?: string
}) => {
  return (
    <button className={`cursor-pointer ${className}`}>
      <div className='flex align-center justify-center gap-[10px]'>
        {icon && <img src={icon} alt='icon' className='w-[14px] h-[14px]' />}
        {text}
      </div>
    </button>
  )
}

export default Button
