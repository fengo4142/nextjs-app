import React, { ReactNode } from 'react';
import Image from 'next/image';

import styles from './style.module.scss';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <div className="hero-container flex flex-col lg:flex-row text-left text-white px-4">
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
      <h1 className={`${styles.h1} text-4xl md:text-6xl whitespace-pre-line leading-2 md:leading-hero`}>
        {props.title}
      </h1>
      <div className="text-md md:text-xl mt-4 mb-16 max-w-screen-sm">{props.description}</div>
      {props.button}
    </div>

    <div className="w-full lg:w-1/2">
      <div className="relative grid grid-cols-12">
        <div className={styles.stack1}>
          <Image src="/assets/images/mask_group.png" width={529} height={288} alt="mask group top" />
        </div>
        <div className={styles.stack2}>
          <Image src="/assets/images/mask_group_rect.svg" width={350} height={320} alt="mask group middle" />
        </div>
        <div className={styles.stack3}>
          <Image src="/assets/images/mask_groupman.png" width={350} height={405} alt="mask group bottom" />
        </div>
      </div>
    </div>
  </div>
);

export { HeroOneButton };
