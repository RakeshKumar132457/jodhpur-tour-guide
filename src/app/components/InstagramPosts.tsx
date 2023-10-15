"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";

const instagramPosts = {
	heading: {
		headingSubTitle: "Jodhpur Diaries",
		headingTitle: "Explore Our Latest Journeys",
		description:
			"Dive into our latest articles that take you through the hidden gems and untold stories of Jodhpur. Stay updated with travel tips, local insights, and much more.",
	},
	recentPosts: [
		{
			permalink: "/blog/mehrangarh-fort",
			featuredImg: "/images/post-1-min.jpg",
			title: "The Majestic Mehrangarh Fort: A Timeless Journey",
			excerpt:
				"Discover the history and architectural marvels of Mehrangarh Fort, one of the largest forts in India.",
			author: {
				img: "/images/person-1-min.jpg",
				name: "Raj Singh",
				titleRole: "Travel Writer, Jodhpur Expert",
			},
		},
		{
			permalink: "/blog/cultural-immersion",
			featuredImg: "/images/post-2-min.jpg",
			title: "Cultural Immersion: The Soul of Jodhpur",
			excerpt:
				"Experience the rich culture and traditions that make Jodhpur a unique destination.",
			author: {
				img: "/images/person-2-min.jpg",
				name: "Anita Sharma",
				titleRole: "Cultural Enthusiast, Co-Founder",
			},
		},
		{
			permalink: "/blog/adventure-activities",
			featuredImg: "/images/post-3-min.jpg",
			title: "Thrilling Adventures in Jodhpur",
			excerpt:
				"From desert safaris to zip-lining, explore the adventurous side of Jodhpur.",
			author: {
				img: "/images/person-3-min.jpg",
				name: "Vikram Patel",
				titleRole: "Adventure Guide, Blogger",
			},
		},
		// ... (other posts)
	],
	cta: {
		href: "/blog",
		label: "To view all posts,",
		labelSuffix: "click here",
	},
};

const InstagramPosts = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [isEnd, setIsEnd] = useState<boolean | null>(null);
	const [isBeginning, setIsBeginning] = useState<boolean | null>(null);
	const sliderRef = useRef<SwiperRef | null>(null);

	useEffect(() => {
		if (sliderRef.current) {
			setIsEnd(sliderRef.current.swiper.isEnd);
			setIsBeginning(sliderRef.current.swiper.isBeginning);
		}
	}, [slideIndex]);

	const prevHandler = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const nextHandler = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<section className='py-20 bg-light overflow-x-hidden'>
			<div className='container px-4 mx-auto'>
				<div className='lg:flex justify-between items-center mb-10'>
					<div className='lg:w-5/12 mb-10  lg:mb-0'>
						{instagramPosts.heading.headingSubTitle && (
							<span className="inline-block py-0.5 z-10 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
								{instagramPosts.heading.headingSubTitle}
							</span>
						)}

						{instagramPosts.heading.headingTitle && (
							<h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
								{instagramPosts.heading.headingTitle}
							</h2>
						)}

						{instagramPosts.heading.description && (
							<p className='text-body leading-relaxed mb-10'>
								{instagramPosts.heading.description}
							</p>
						)}
					</div>
					<div className='lg:5/12 text-left  lg:text-right'>
						<div className='inline-flex ml-auto space-x-3'>
							<div
								onClick={prevHandler}
								className={` ${
									isBeginning
										? "opacity-30 bg-[#E1E7EA] cursor-auto"
										: "opacity-100 hover:bg-primary"
								}  group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center `}
							>
								<BiChevronLeft
									className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
										isBeginning
											? "group-hover:!text-primary"
											: "group-hover:text-white"
									}`}
								/>
							</div>
							<div
								onClick={nextHandler}
								className={` ${
									isEnd
										? "opacity-30 bg-[#E1E7EA] cursor-auto"
										: "opacity-100 hover:bg-primary"
								}  group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center `}
							>
								<BiChevronRight
									className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
										isEnd
											? "group-hover:!text-primary"
											: "group-hover:text-white"
									}`}
								/>
							</div>
						</div>
					</div>
				</div>
				<Swiper
					breakpoints={{
						640: {
							width: 640,
							slidesPerView: 1,
						},
						768: {
							width: 768,
							slidesPerView: 2,
						},
						960: {
							width: 960,
							slidesPerView: 2,
						},
					}}
					ref={sliderRef}
					speed={700}
					spaceBetween={30}
					onSlideChange={(swiper) =>
						setSlideIndex(swiper.activeIndex)
					}
					className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-['']  before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
				>
					{instagramPosts.recentPosts.map((item, idx) => {
						return (
							<SwiperSlide
								key={idx}
								className='overflow-visible h-full'
							>
								<div className='p-5 rounded-lg bg-white relative mt-10'>
									<Link
										href={item.permalink}
										className='relative -mt-10 inline-block overflow-hidden rounded-lg mb-4'
									>
										<Image
											src={item.featuredImg}
											width={782}
											height={467}
											alt='User images'
										/>
									</Link>
									<h2 className='text-heading text-lg font-bold leading-7 mb-5'>
										{item.title}
									</h2>
									<p className='relative mb-6'>
										{item.excerpt}
									</p>
									<div className='flex items-center space-x-4'>
										<div className='flex-shrink-0'>
											<Image
												src={item.author.img}
												width={50}
												height={50}
												alt='User image'
												className='rounded-full object-cover w-14 h-14'
											/>
										</div>
										<div className='leading-5'>
											<strong className='text-primary'>
												{item.author.name}
											</strong>
											<span className='block text-sm'>
												{item.author.titleRole}
											</span>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className='mx-auto flex items-center justify-center'>
					<Link
						href={instagramPosts.cta.href}
						className='duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-2 items-center hover:border-gray-400'
					>
						{instagramPosts.cta.label}{" "}
						<strong className='text-primary pl-1 font-semibold'>
							{instagramPosts.cta.labelSuffix}
						</strong>
						<span className='text-gray-300 '></span>
						<span className='bg-primary rounded-full w-8 h-8 flex justify-center items-center'>
							<BiChevronRight className='w-6 h-6 text-white' />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default InstagramPosts;
