import React from 'react'
import '../TopBar/topBar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='top'>
          <Link to="/" className='headerName'>SHARETRADE<span className='headerName-com'>.COM</span></Link>
      </div>
  )
}