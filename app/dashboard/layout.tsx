import React from 'react'
import SideNav from '../ui/SideNav'

const layout = ({children}:{ children:React.ReactNode}) => {
  return (
    <div className=' flex gap-2'>
        <div className=' bg-gray-400 w-[12%] px-2 py-2'><SideNav/></div>
        <div className=''>{children}</div>
    </div>
  )
}

export default layout