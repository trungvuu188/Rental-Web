import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import CollectionBox from '../components/Home/Collection/CollectionBox';
import DealTimer from '../components/Home/Deal/DealTimer';
import HeroSection from '../components/Home/Hero/HeroSection';
import Instagram from '../components/Home/Instagram/Instagram';
import LimitedEdition from '../components/Home/Limited/LimitedEdition';
import Services from '../components/Home/Services/Services';
import Trendy from '../components/Home/Trendy/Trendy';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CollectionBox />
      <Trendy />
      <DealTimer />
      <Banner />
      <LimitedEdition />
      <Instagram />
      <Services />
    </>
  );
};

export default Home;
