import { ReactNode } from 'react';
import className from 'classnames';
import styles from './style.module.scss';

type ISectionProps = {
  title?: string;
  description?: string;
  partialDark?: boolean;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const wrapper = className(
    'relative mx-auto px-3',
    (props.yPadding || 'py-16'),
    (props.partialDark && styles.section),
    styles.customScreen
  );

  return (
    <div
      className={wrapper}
    >
      {(props.title || props.description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  )
};

export { Section };
