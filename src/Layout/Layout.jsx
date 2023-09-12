    import React from 'react'

import Nave from '../componant/Nave/Nave'
import Foter from '../componant/Foter/Foter'
import Content from '../componant/Cont/Content'
import { Outlet } from 'react-router-dom'
    
    export default function Layout() {
      return (
        <>
        <Nave/>
        <Outlet/>
        <Content/>
        <Foter/>
        </>
      )
    }
    