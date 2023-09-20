import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import {
	HiPhone,
	HiMiniGlobeAsiaAustralia,
	HiMiniHeart,
} from "react-icons/hi2";

const footerContent = {
	about: {
		logo: "/images/logo.svg",
		description:
			"Embark on a journey through the rich history and vibrant culture of Jodhpur with our expert-guided tours.",
		cta: {
			href: "/about-us",
			label: "Discover More",
		},
	},
	footerLinks: [
		{
			heading: "Explore",
			links: [
				{
					href: "/",
					label: "Home",
				},
				{
					href: "/about-us",
					label: "About Us",
				},
				{
					href: "/contact",
					label: "Contact",
				},
				{
					href: "/blog",
					label: "Blog",
				},
			],
		},
		{
			heading: "Quick Links",
			links: [
				{
					href: "/faq",
					label: "FAQs",
				},
				{
					href: "/support",
					label: "Customer Support",
				},
				{
					href: "/terms-and-conditions",
					label: "Terms & Conditions",
				},
				{
					href: "/privacy-policy",
					label: "Privacy Policy",
				},
			],
		},
	],
	contact: {
		heading: "Get in Touch",
		description:
			"We're here to assist you in planning your next unforgettable adventure in Jodhpur.",
		address: {
			street: "45 Royal Lane, Jodhpur, Rajasthan",
			phone: "+91 123 456 7890",
			website: "https://jodhpurtourguide.com",
		},
	},
	copyright: {
		labelOne: "Copyright 2023. Crafted with",
		labelTwo: "by Jodhpur Tour Guide Team. All rights reserved.",
	},
};

const Footer = () => {
	return (
		<footer role='contentinfo' className='py-20 bg-white'>
			<div className='container px-4 mx-auto'>
				<div className='block lg:flex gap-20 mb-10 pb-10'>
					<div className='lg:w-4/12 mb-10 lg:mb-0'>
						<Link href='/' className='mb-4 inline-block'>
							<Image
								src={footerContent.about.logo}
								width={157}
								height={30}
								alt='logo image'
							/>
						</Link>
						<p className='leading-relaxed mb-7 '>
							{footerContent.about.description}
						</p>
						<p>
							<Link
								href={footerContent.about.cta.href}
								className='flex space-x-2 outline-none  items-center font-semibold text-primary group'
							>
								<span>{footerContent.about.cta.label}</span>
								<span className='w-6  h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary'>
									<BiChevronRight className='text-lg' />
								</span>
							</Link>
						</p>
					</div>
					<div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
						<div className='grid grid-cols-2 gap-10'>
							{footerContent.footerLinks.map((item, idx) => {
								return (
									<div key={idx}>
										<h3 className='font-semibold text-heading mb-5 '>
											{item.heading}
										</h3>
										<ul className='p-0 m-0'>
											{item.links.map(
												(subItem, subIdx) => {
													return (
														<li
															key={subIdx}
															className='mb-3'
														>
															<Link
																href={
																	subItem.href
																}
																className='group flex items-center duration-300 transition-all ease-in-out hover:text-primary'
															>
																<span>
																	{
																		subItem.label
																	}
																</span>
																<span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group group-hover:opacity-100 group-hover:left-3'>
																	<BiChevronRight className='text-xl' />
																</span>
															</Link>
														</li>
													);
												}
											)}
										</ul>
									</div>
								);
							})}
						</div>
					</div>
					<div className='w-full lg:w-4/12'>
						<h3 className='font-semibold text-heading mb-5'>
							{footerContent.contact.heading}
						</h3>
						<p className='leading-relaxed mb-7'>
							{footerContent.contact.description}
						</p>
						<ul>
							<li className='flex items-start space-x-3 mb-5'>
								<HiLocationMarker className='text-xl text-primary' />
								<span>
									{footerContent.contact.address.street}
								</span>
							</li>
							<li className='flex items-start space-x-3 mb-5'>
								<HiPhone className='text-xl text-primary' />
								<span>
									{footerContent.contact.address.phone}
								</span>
							</li>
							<li className='flex items-start space-x-3 mb-5'>
								<HiMiniGlobeAsiaAustralia className='text-xl text-primary' />
								<span>
									{footerContent.contact.address.website}
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='text-center pt-10 border-t border-gray-200'>
					<p>
						{footerContent.copyright.labelOne}{" "}
						<HiMiniHeart className='text-red-600 inline-block' />
						{footerContent.copyright.labelTwo}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
