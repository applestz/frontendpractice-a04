import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image
            src={'/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className={styles.bannertext}>
                <h1>where every event finds its venue</h1>
                <h3>
                    Finding the perfect venue has never been easier.
                    Whether it's a wedding, coporate event, or private party,
                    we connecting people to the perfect place.
                </h3>
            </div>
        </div>
    )
}