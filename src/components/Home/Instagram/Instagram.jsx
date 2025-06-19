import React from 'react';
import './Instagram.css';
import insta1 from '../../../assets/Instagram/IMG_0172.JPG';
import insta2 from '../../../assets/Instagram/IMG_2179.JPG';
import insta3 from '../../../assets/Instagram/IMG_2358.JPG';
import insta4 from '../../../assets/Instagram/IMG_2374.JPG';
import insta5 from '../../../assets/Instagram/IMG_2735.JPG';
import insta6 from '../../../assets/Instagram/IMG_7973.JPG';
import insta7 from '../../../assets/Instagram/IMG_9477.JPG';
import insta8 from '../../../assets/Instagram/IMG_9521.JPG';
import insta9 from '../../../assets/Instagram/IMG_9590.JPG';
import insta10 from '../../../assets/Instagram/IMG_9612.JPG';
import insta11 from '../../../assets/Instagram/IMG_9616.JPG';
import insta12 from '../../../assets/Instagram/IMG_9788.JPG';

const Instagram = () => {
  return (
    <>
      <div className='instagram'>
        <h2>@ShareIt</h2>
        <div className='instagramTiles'>
          <div className='instagramtile'>
            <img src={insta1} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta2} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta3} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta4} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta5} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta6} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta7} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta8} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta9} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta10} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta11} alt='' />
          </div>
          <div className='instagramtile'>
            <img src={insta12} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
