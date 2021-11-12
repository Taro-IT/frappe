import clsx from 'clsx';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

type LogoProps = {
    readonly link: string;
    readonly alternative : string;
    readonly className?: string;
    readonly width?: string;
    readonly height?: string;
  };


/**
 * @link string - The link to the image source.
 * @alternative string - The text to be displayed if the source link isn't found.
 * @className - string, optional - The classes of the logo.
 * @width - string, optional - The width of the logo.
 * @height - string, optional - The height of the logo.
 */
export const Logo = ({link, alternative, className, width, height} : PropsWithChildren<LogoProps>) => {
  const router = useRouter();
  const handleLink = () => router.push("/");
  //TODO check redirect with reload 
  
    return(
      <div className="px-4">
        <img className={clsx("m-auto", className)} onClick={handleLink} alt={alternative} width={width} height={height} src={link}/>
      </div>
    );
};