"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const heroContent = {
    text: {
        subheading: "Welcome to Jodhpur's Premier Tour Guide",
        heading: "Discover the Enchanting Blue City",
        description:
            "Explore Jodhpur's historic forts, vibrant markets, and cultural landmarks. Our tailored tours are perfect for tourists, foreigners, and celebrities seeking an authentic experience.",
    },
    images: {
        img1: {
            src: "/images/hero-img-1-min.jpg",
            alt: "Mehrangarh Fort in the Blue City of Jodhpur",
        },
        img2: {
            src: "/images/hero-img-2-min.jpg",
            alt: "Jaswant Thada, an Architectural Marvel in Jodhpur",
        },
        img3: {
            src: "/images/hero-img-3-min.jpg",
            alt: "Umaid Palace, the Royal Residence in Jodhpur",
        },
        img4: {
            src: "/images/hero-img-4-min.jpg",
            alt: "Aerial View of the Blue City of Jodhpur",
        },
        img5: {
            src: "/images/hero-img-5-min.jpg",
            alt: "Mehrangarh Fort, a Different Perspective",
        },
    },
    ctaButton: {
        text: "Discover Jodhpur Today",
        id: "discover-jodhpur-button",
        href: "#",
    },
};

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "slide" as any,
            once: true,
        });
    });

    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-5/12 mb-10 lg:mb-0'>
                        {heroContent.text.subheading && (
                            <span
                                className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
                                data-aos='fade-up'
                            >
                                {heroContent.text.subheading}
                            </span>
                        )}
                        {heroContent.text.heading && (
                            <h1
                                className='text-4xl lg:text-5xl font-bold text-heading mb-7'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                {heroContent.text.heading}
                            </h1>
                        )}

                        {heroContent.text.description && (
                            <p
                                className='leading-relaxed text-body mb-10'
                                data-aos='fade-up'
                                data-aos-delay='200'
                            >
                                {heroContent.text.description}
                            </p>
                        )}

                        <div
                            className='flex space-x-3'
                            data-aos='fade-up'
                            data-aos-delay='300'
                        >
                            <Link
                                href={heroContent.ctaButton.href}
                                className=' py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1'
                                id={heroContent.ctaButton.id}
                            >
                                {heroContent.ctaButton.text}
                            </Link>
                            {/* <Link
								href='#'
								className=' py-4 px-5 bg-secondary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg inline-block relative top-0 hover:-top-1'
							>
								How it works
							</Link> */}
                        </div>
                    </div>

                    <div className='lg:w-6/12 space-y-2'>
                        <div className='flex space-x-2 items-stretch'>
                            <div className='w-8/12'>
                                {heroContent.images.img1 && (
                                    <Image
                                        src={heroContent.images.img1.src}
                                        width={397}
                                        height={406}
                                        alt={heroContent.images.img1.alt}
                                        className='object-cover h-full w-full rounded-2xl'
                                        data-aos='fade-in'
                                    />
                                )}
                            </div>
                            <div className='w-4/12 self-end space-y-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {heroContent.images.img2 && (
                                        <Image
                                            src={heroContent.images.img2.src}
                                            width={437}
                                            height={437}
                                            alt={heroContent.images.img2.alt}
                                            className='object-cover h-full w-full rounded-2xl'
                                            data-aos='fade-in'
                                            data-aos-delay='100'
                                        />
                                    )}
                                    <div
                                        className='bg-yellowLight rounded-2xl rounded-tr-[200px]'
                                        data-aos='fade-in'
                                        data-aos-delay='150'
                                    ></div>
                                </div>
                                {heroContent.images.img3 && (
                                    <Image
                                        src={heroContent.images.img3.src}
                                        alt={heroContent.images.img3.alt}
                                        width={374}
                                        height={392}
                                        className='object-cover h-full w-full rounded-2xl'
                                        data-aos='fade-in'
                                        data-aos-delay='200'
                                    />
                                )}
                            </div>
                        </div>

                        <div className='flex space-x-2'>
                            <div className='w-4/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div
                                        className='bg-greenLight rounded-2xl rounded-bl-[200px]'
                                        data-aos='fade-in'
                                        data-aos-delay='250'
                                    ></div>
                                    {heroContent.images.img4 && (
                                        <div>
                                            <Image
                                                src={
                                                    heroContent.images.img4.src
                                                }
                                                width={394}
                                                height={394}
                                                alt={
                                                    heroContent.images.img4.alt
                                                }
                                                className='object-cover h-full w-full rounded-2xl'
                                                data-aos='fade-in'
                                                data-aos-delay='400'
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='w-5/12'>
                                {heroContent.images.img5 && (
                                    <Image
                                        src={heroContent.images.img5.src}
                                        width={446}
                                        height={495}
                                        alt={heroContent.images.img5.alt}
                                        className='object-cover h-full w-full rounded-2xl'
                                        data-aos='fade-in'
                                        data-aos-delay='300'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;