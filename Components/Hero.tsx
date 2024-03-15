"use client";

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
            Buku adalah jendala dunia! Temukan buku yang cocok dengan duniamu sendiri
        </h1>
        <p className="hero_subtitle">
            Lakukan pembelian buku yang sesuai dengan karakteristikmu dari berbagai genre yang ada!
        </p>

        <CustomButton 
            title="Explore Books"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick = {handleScroll}
        />
      </div>
    </div>
  )
}

export default Hero
