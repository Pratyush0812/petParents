import React, { useState,useRef } from 'react';
import HeroCSS from "../styles/Hero.module.css";
const Wave = () => {
  const refLocation = useRef(null);

  const handleClick = () => {
    refLocation.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <section className={HeroCSS.hero}>
        <div className={HeroCSS.hero__waves} />
        <h1 className={HeroCSS.hero__title}>Become a PetParent</h1>
        <button className={HeroCSS.hero__button} onClick={handleClick}>
          Learn More
        </button>
      </section>
      <section ref={refLocation} className={HeroCSS.content}>
        <p className={HeroCSS.content__paragraph}>
        Discover a world where compassion reigns. Stray dogs, cats, and abandoned pets yearn for a place to call home. In the shadows of neglect, they face uncertainty and loneliness. But together, we can change their stories. PetParent connects you with these forgotten souls, ready to share a lifetime of love. Be their hero.
        </p>
        <p className={HeroCSS.content__paragraph}>
        Embrace the opportunity to rescue, nurture, and cherish a life that craves your affection. Step forward, make a difference, and let your heart be their forever home!
        </p>
      </section>
    </>
  );
};

export default Wave;