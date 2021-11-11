import styles from './Banner.module.scss';

interface BannerProps{
  readonly image:string;
}

export const Banner = ( {image}: BannerProps ) => {
    return (
      <div className={styles['Banner']}>
        <div  className={styles['Banner']} >
          <img hidden className={styles['Banner--BannerItem']} src={image}/> 
        </div>
      </div>
    )};