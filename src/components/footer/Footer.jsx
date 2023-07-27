import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Zane Corp. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} alt='Zane Corp Facebook' className={styles.icon}/>
          <Image src="/2.png" width={15} height={15} alt='Zane Corp Instagram' className={styles.icon}/>
          <Image src="/3.png" width={15} height={15} alt='Zane Corp Twitter' className={styles.icon}/>
          <Image src="/4.png" width={15} height={15} alt='Zane Corp Youtube' className={styles.icon}/>
        </div>
    </div>
  )
}

export default Footer