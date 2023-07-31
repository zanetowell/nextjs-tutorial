import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste reiciendis tenetur nostrum quae quis labore dolorem voluptas modi ea cumque autem officiis perferendis quisquam, deserunt soluta maiores minus minima fugiat.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Test Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem quisquam placeat. Consequuntur sunt earum totam! Doloremque quasi numquam esse reiciendis aspernatur labore porro expedita sed officiis, nobis incidunt debitis.
        </p>
      </div>
    </div>
  )
}

export default BlogPost