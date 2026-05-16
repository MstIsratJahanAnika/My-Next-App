// import React from 'react';

import Image from "next/image";
import starGirl from '../../assets/images/starGirl.png';

const AboutPage = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl">This is about page</h2>

            <Image
                src="https://i.ibb.co.com/bMmYg7qK/charlie-deets-tl-Nvp-Knwi-Ig-unsplash.jpg"
                alt="test image"
                width={500}
                height={500}
            />

            <Image src='https://plus.unsplash.com/premium_photo-1775807385673-5328bdef3118' alt='depressed birdie' width={500} height={700}></Image>

            <Image src='/animeGirl.jpg' alt="Anime Girl" width={500} height={300}></Image>

            <Image src={starGirl} alt="Star Girl" width={300} height={500}></Image>
        </div>
    );
};

export default AboutPage; 