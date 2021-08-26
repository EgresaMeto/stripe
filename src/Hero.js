import React from 'react';
import phoneImg from './images/phone.svg';
import {useGlobalContext} from './context';

const Hero =()=>{
 const {closeSubmenu} =useGlobalContext()

return <section className="hero" onMouseOver={closeSubmenu}>
 <div className="hero-center">
 <article className="hero-info">
  <h1>Payment infrastructure for the internet</h1>
  <p>Millions of company of all sizes-from stratups to Fortune 500s-use Stripe's software and APIs to accept payments,send payouts,and manage their businesses online.</p>
  <button className="btn">Start now</button>

 </article>
 <article className="hero-image">
 <img src={phoneImg} className="phone-img" alt="phone"/>

 </article>

 </div>
</section>

}

export default Hero;
