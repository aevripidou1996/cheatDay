import React from 'react'
import Hero from '../hero/hero'
import classes from './home.module.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
import Foods from '../foods/foods'
import Newsletter from '../newsletter/newsletter'

let Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivering</span>
            <h2 className={classes.deliveryTitle}>Nothing but the best food and service!!!</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg}/>
              <h3>We guarantee one time delivery</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg}/>
              <h3>We strive to bring you the best service</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg}/>
              <h3>Award winning service</h3>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home