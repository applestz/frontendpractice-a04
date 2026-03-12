import Image from 'next/image'
import styles from './card.module.css'

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image
                src={'/place.jpg'}
                alt='place picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>
                <h2>The Bloom Pavilion</h2>
                <h3>
                    A stunning bouquet hall where love blossoms 
                    and unforgettable memories are made.
                </h3>
            </div>
        </div>
    )
}