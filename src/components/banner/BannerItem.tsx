import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

type BannerItemProps = {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
};

const BannerItem = (props: BannerItemProps) => (
  <div className="text-center flex flex-col p-4 rounded-md mx-auto">
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      <Image src={props.icon} width={172} height={172} alt={props.title} />
    </div>
    <div className="font-semibold">
      <div className="text-3xl text-black">{props.title}</div>
      <div className="text-xl text-gray-600">
        <Link href={props.link}>
          <a>
            <span className="mr-2">{props.subtitle}</span>
            <Image src="/assets/images/arrow-right.svg" width={8} height={12} alt="arrow right" />
          </a>
        </Link>
      </div>
    </div>

  </div>
);

export { BannerItem };
