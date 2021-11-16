import Link from 'next/link';
import Image from 'next/image';

import { Background } from '../components/background/Background';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Navbar } from '../components/navigation/Navbar';

const Hero = () => (
  <Background>
    <Background color="bg-white">
      <Section yPadding="py-6">
        <Navbar />
      </Section>
    </Background>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'To bringing\n'}
            people <span className="italic">together</span>
          </>
        }
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        button={
          <Link href="/">
            <a className="inline-block rounded" style={{ backgroundColor: '#D8B243' }}>
              <div className="text-center uppercase text-black font-bold py-2 md:py-4 px-8 md:px-16">
                Portfolio
              </div>
            </a>
          </Link>
        }
      />
      <div className="absolute -bottom-40 right-0 z-50">
        <Image src="/assets/images/circle.svg" width={281} height={281} />
      </div>
    </Section>
  </Background>
);

export { Hero };
