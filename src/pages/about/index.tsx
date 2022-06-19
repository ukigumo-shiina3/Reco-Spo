/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { AboutCarousel } from 'src/components/Carousel/AboutCarousel';
import { AdminAboutLayout } from 'src/components/Layout/AboutLayout/AdminAboutLayout';
import { UserAboutLayout } from 'src/components/Layout/AboutLayout/UserAboutLsyout';
import { UserLayout } from 'src/components/Layout/UserLayout';

const About: NextPage = () => {
  return (
    <UserLayout>
      <div>
        <AboutCarousel />
        <UserAboutLayout />
        <AdminAboutLayout />
      </div>
    </UserLayout>
  );
};

export default About;
