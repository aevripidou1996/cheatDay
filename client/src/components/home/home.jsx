import React from 'react'
import classes from './home.module.css'

function home() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>

      <Hero/>
      </div>
    </div>
  )
}

export default home