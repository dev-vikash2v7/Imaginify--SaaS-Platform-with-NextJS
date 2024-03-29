import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileSidebar from '@/components/shared/MobileSidebar'


const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main className='root'>

<Sidebar/>

<MobileSidebar/>

      <div className="root-container">
        <div className="wrapper">
      {children}

        </div>
      </div>
      
      </main>
  )
}

export default Layout