"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroContent = {
    text: {
        heading: "Nature.",
        subheading: "Discover the Enchanting Blue City",
    },
    image: {
        src: "/images/hero-img-1-min.jpg",
        alt: "Mehrangarh Fort in the Blue City of Jodhpur",
    },
    ctaButton: {
        text: "Explore Now",
        href: "#",
    },
};

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 bg-fixed bg-cover bg-center"
                 style={{
                     backgroundImage: `url(${heroContent.image.src})`,
                 }}>
                <div className="absolute inset-0 bg-black opacity-30" />
            </div>

            <div className="relative h-full flex items-center justify-center text-white px-4">
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">
                        {heroContent.text.heading}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        {heroContent.text.subheading}
                    </p>
                    <Link
                        href={heroContent.ctaButton.href}
                        className="py-4 px-8 bg-white text-black rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                    >
                        {heroContent.ctaButton.text}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
