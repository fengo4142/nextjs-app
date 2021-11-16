import className from 'classnames';
import { useRouter } from 'next/router';

import styles from './style.module.scss';

type IFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const FeatureRow = (props: IFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full order-2 lg:w-1/2 lg:order-1 text-left sm:px-6">
        <h3 className={`${styles.title} text-4xl lg:text-6xl font-semibold`}>{props.title}</h3>
        <div className="mt-6 text-md lg:text-lg leading-7">{props.description}</div>
      </div>

      <div className="w-full order-1 lg:w-1/2 lg:order-2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { FeatureRow };
