import * as React from "react";
import { SVGProps } from "react";

function IconPlay({ size = 23, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    // <Image src="/play_icon.svg" alt="Play" width={38} height={38} className={cn("w-full 
    //   h-full", props.className)} />
  
    <svg
      viewBox="0 0 26 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size} 
      height={size}
      {...props}
    >
      <path d="M1.28235 27.8385L14.3091 14.3065L1.29327 0.798828C0.945641 1.0091 0.730469 1.49602 0.730469 2.13341V26.5168C0.735103 27.1542 0.942495 27.6055 1.28235 27.8385Z" fill="currentColor"/>
      <path d="M14.7761 13.9333L18.6564 9.90202L2.85468 0.901135C2.58862 0.740608 2.28637 0.655711 1.97852 0.655273L14.7745 13.9316L14.7761 13.9333Z" fill="currentColor"/>
      <path d="M14.7759 14.6816L1.93945 28.0162C2.26164 28.0218 2.57894 27.9345 2.8561 27.7639L18.6889 18.7388L14.7759 14.6816Z" fill="currentColor"/>
      <path d="M24.3794 13.1679L19.121 10.167L15.1348 14.3083L19.1507 18.4755L24.3778 15.4827C25.4894 14.847 25.4894 13.8004 24.3794 13.1679Z" fill="currentColor"/>
    </svg>
  );
}

export default IconPlay; 