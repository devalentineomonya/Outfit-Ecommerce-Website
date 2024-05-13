import React from 'react'

const MaxWidthContainer = ({children}) => {
  return (
    <div className="w-full flex justify-center h-fit pb-12 dark:bg-slate-950 bg-gray-50">
        <div className="max-w-[1400px] w-full h-full flex items-center flex-col">
            {children}
        </div>
      
    </div>
  )
}

export default MaxWidthContainer
