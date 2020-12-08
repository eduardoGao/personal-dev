import React from 'react'
import Image from 'next/image'
import styles from './styles/hero.module.scss'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.imgContainer}>
        <div className={styles.circle}></div>
        <Image src='/me.png' width='175' height='175' layout='intrinsic' className={styles.image} />
      </div>
      <div className={styles.text}>
        <h1>Eduardo Díaz</h1>
        <h4>Frontend Developer & UI Designer</h4>
      </div>
    </div>
  )
}

export default Hero