import React from 'react'
import classes from './hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'



function hero() {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div classes={classes.wrapper}>
        <div className={classes.left}></div>
        <h2 className={classes.title}>Do you Crave Delicious food?</h2>
        <p className={classes.firstMsg}>But going out to take <span>food costs time....</span></p>
        <p className={classes.seconfMsg}>
          Why not order <span>pizza</span> or something <br/> <span>delicious </span> from our restaurant
        </p>
        <p className={classes.desc}>
          Our restaurant always puts the client above.
          They are our single most important thing for our business.
        </p>
        <div className={classes.buttons}></div>
        <button className={classes.buttonOrder}>Order now!</button>
        <button className={classes.buttonSee}><a href='#foods'>See What's available <AiOutlineArrowDown/> </a></button>
        <div className={classes.right}>
          <img src={manEating} alt='' className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default hero