import React from 'react';

import { FeatureRow } from '../feature/FeatureRow';
import { BannerItem } from '../banner/BannerItem';
import { AppConfig } from '../utils/AppConfig';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section partialDark>
    <FeatureRow
      title="Knowing the numbers is never enough"
      description="It's about understanding the opportunities and challenges behind the numbers — and planning for a stronger future. What's the right product selection for your customers? Which tools and information could make your business even more successful? At Southern Glazer's, we tailor our services for each and every one of our customers. Because we know that when we come together, there's always something to celebrate."
      image="/assets/images/group_26.png"
      imageAlt="Group 26"
      reverse
    />
    <div className="py-4 flex flex-col md:flex-row justify-between">
      {AppConfig.BANNER_ITEMS.map(x => (
        <BannerItem
          key={x.title}
          title={x.title}
          subtitle={x.subtitle}
          link={x.link}
          icon={x.icon}
        />
      ))}
    </div>
  </Section> 
);

export { VerticalFeatures };
