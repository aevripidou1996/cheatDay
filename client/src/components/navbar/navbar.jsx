import React, { useState } from 'react'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'


function navbar() {

const [isScrolled, setIsScrolled] = useState(false)

window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true)
  return () => (window.onscroll = null)
}


  return (
    <div className={'${classes.container} ${isScrolled && classes.scrolled}'}>
      <div className={classes.wrapper}>
<div className={classes.left}>
  <Link to='/' className={classes.title}>WebDevMania</Link>
</div>

<div className={classes.center}>
  <ul className={classes.lists}>
    <li className={classes.listItem}>
      <a href='#'>Home</a>
    </li>
    <li className={classes.listItem}>
      <a href='#contacts'>Contacts</a>
    </li>
    <li className={classes.listItem}>
      <a href='#foods'>Foods</a>
      <li className={classes.listItem}>
      <a href='#faq'>FAQ</a>
    </li>
    <li className={classes.listItem}>
      <Link to='/create'>Create</Link>
    </li>
    </li>
    </ul>
</div>

<div className={classes.right}>
  <AiOutlineUser className={classes.userIcon}/>
  <Link to='/cart' className={classes.cartContainer}>
    <AiOutlineShoppingCart className={classes.cartIcon} />
   <div className={classes.cartQuantity}>0</div> 
  </Link>
  <button className={classes.logout}>Logout</button>
</div>

      </div>
    </div>
  )
}

export default navbar