import styles from './Banner.module.scss';

interface BannerProps{
  readonly image:string;
  readonly width?:string;
}

export const Banner = ( {image, width}: BannerProps ) => {
    return (
        <div className={styles['Banner']} >
          <img  className={styles['Banner--img']} src={image} width={width}/>
        </div>
    )};