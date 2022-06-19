/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { AboutCarousel } from 'src/components/Carousel/AboutCarousel';
import { UserLayout } from 'src/components/Layout/UserLayout';

const About: NextPage = () => {
  return (
    <UserLayout>
      <div>
        <AboutCarousel />
      </div>
    </UserLayout>
  );
};

export default About;
