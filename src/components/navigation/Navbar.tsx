import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { HamburgerBtn } from './Hamburger';
import { AppConfig } from '../../utils/AppConfig';
import styles from './style.module.scss';

const Navbar = () => {
  
  const onUpdateToggle = (v: boolean) => {
    // use global store to mutate - toggling different ui for mobile
    console.log('toggled', v)
  }

  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={85}
              height={74}
            />
          </a>
        </Link>
      </div>

      <nav className={styles.navbar}>
        <ul className={styles.socials}>
          {AppConfig.SOCIAL_LINKS.map(x => (
            <li className="hidden sm:block" key={x.name}>
              <Link href={x.link}>
                <a>
                  <Image
                    src={x.icon}
                    alt={x.name}
                    width={20.2}
                    height={20.2}
                  />
                </a>
              </Link>
            </li>
          ))}
          <div className="hidden sm:block mb-2 text-lg text-black">
            <span className="mx-5 text-gray-500">|</span>
            <a className="cursor-pointer text-black">
              Log In
              <span className="ml-3">
                <Image
                  src="/assets/images/arrow-down.svg"
                  alt="arrow down"
                  width={10.8}
                  height={10.8}
                />
              </span>
            </a>
          </div>
        </ul>
        <ul className="hidden lg:flex items-center font-medium text-xl text-black">
          { AppConfig.MENU_ITEMS.map(x => (
            <li key={x.name} className={x.name === 'home' ? 'opacity-100' : 'opacity-60'}>
              <Link href={x.link}>
                <a>{x.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="block sm:hidden ml-2">
          <HamburgerBtn toggled={onUpdateToggle} />
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
