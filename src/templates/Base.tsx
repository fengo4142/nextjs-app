import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased bg-gray-100">
    <Meta title={AppConfig.TITLE} description={AppConfig.DESCRIPTION} />
    <Hero />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
