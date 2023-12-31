import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'Zane Corp Contact Information',
  description: 'Next.js Tutorial Contact Page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea 
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact