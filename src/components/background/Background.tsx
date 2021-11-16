import { ReactNode } from 'react';

import styles from './style.module.scss'

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color ?? styles.background}>{props.children}</div>
);

export { Background };
