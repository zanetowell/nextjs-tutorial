import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus adipisci inventore dolores corporis ipsa, soluta illum facilis reprehenderit, reiciendis, quae autem laudantium fuga id. Perferendis, deserunt quaerat sit quasi hic quo sunt odio sint iste itaque non veniam ad corrupti minus illum voluptates at iusto labore?
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci inventore dolores corporis ipsa, soluta illum facilis reprehenderit, reiciendis, quae autem laudantium fuga id. Possimus quis officia quaerat dolorum eum!
          </p>
        </div>
        <div className={styles.item}>
          <h1>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci inventore dolores corporis ipsa, soluta illum facilis reprehenderit, reiciendis, quae autem laudantium fuga id. Natus, aliquam harum totam, eum, ullam repudiandae odio vitae eveniet nemo amet corrupti saepe ratione ut alias minima? Vel dignissimos culpa veritatis.
            <br /> <br /> 
            - Creative Illustrations 
            <br /> <br />
            - Dynamic Websites 
            <br /> <br />
            - Fast and Handy Mobile Apps
          </p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}

export default About