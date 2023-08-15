import React from "react";
import Image from "next/image";
import Link from "next/link";

const testimonialContent = {
	quoteImg: "/images/quote.svg",
	heading: {
		headingSubtitle: "Customers says",
		headingTitle: "Hear What Our Customers Say",
		description:
			"From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
		cta: {
			cta_href: "#",
			cta_label: "Get Started",
		},
	},
	testimonials: [
		{
			img: "/images/person-1-min.jpg",
			name: "Jane Cooper",
			titleRole: "Customer - Dallas, TX",
			testimony:
				"With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
		},
		{
			img: "/images/person-2-min.jpg",
			name: "Jane Cooper",
			titleRole: "Customer - Dallas, TX",
			testimony:
				"With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
		},
		{
			img: "/images/person-3-min.jpg",
			name: "Jane Cooper",
			titleRole: "Customer - Dallas, TX",
			testimony:
				"With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
		},
	],
};

const Testimonial = () => {
	return (
		<section className='py-20 bg-light'>
			<div className='container px-4 mx-auto'>
				<div className='lg:flex justify-between items-center'>
					<div className='lg:w-4/12  lg:pr-24 mb-10 lg:mb-0'>
						{testimonialContent.heading.headingSubtitle && (
							<span className="inline-block py-0.5 z-10 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
								{testimonialContent.heading.headingSubtitle}
							</span>
						)}

						{testimonialContent.heading.headingTitle && (
							<h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
								{testimonialContent.heading.headingTitle}
							</h2>
						)}

						{testimonialContent.heading.description && (
							<p className='text-body leading-relaxed mb-10'>
								{testimonialContent.heading.description}
							</p>
						)}

						{testimonialContent.heading.cta.cta_label && (
							<div className='flex space-x-3'>
								<Link
									href={
										testimonialContent.heading.cta.cta_href
									}
									className=' py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1'
								>
									{testimonialContent.heading.cta.cta_label}
								</Link>
							</div>
						)}
					</div>
					<div className='lg:w-8/12'>
						<div className='md:flex w-full space-x-0 md:space-x-6 items-end'>
							<div className='md:w-6/12 mb-6 md:mb-0'>
								{testimonialContent.testimonials.map(
									(item, idx) => {
										if (idx == 2) {
											return null;
										}
										return (
											<div
												className={`bg-white p-7 rounded-lg w-full ${
													idx == 1 ? "" : "mb-6"
												}`}
												key={idx}
											>
												<div className='flex space-x-4 items-center mb-4'>
													<div className='relative'>
														<Image
															src={item.img}
															alt='user image'
															width={579}
															height={720}
															className='object-cover h-14 w-14 rounded-full '
														/>
														<span className='absolute bottom-0  -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
															<Image
																src={
																	testimonialContent.quoteImg
																}
																width={14}
																height={9}
																alt='quote'
															/>
														</span>
													</div>
													<div className='leading-3'>
														{item.name && (
															<strong className='block text-heading text-lg'>
																{" "}
																{item.name}
															</strong>
														)}
														{item.titleRole && (
															<span className='text-sm'>
																{item.titleRole}
															</span>
														)}
													</div>
												</div>
												<div>
													<blockquote className='text-heading leading-relaxed'>
														‟{item.testimony}”
													</blockquote>
												</div>
											</div>
										);
									}
								)}
							</div>
							<div className='md:w-6/12 '>
								<div>
									<div className='w-16  h-16 hidden md:block  bg-greenLight rounded-full mb-6'></div>
									<div className='bg-white p-7 rounded-lg w-full '>
										<div className='flex space-x-4 items-center mb-4'>
											<div className='relative'>
												<Image
													src={
														testimonialContent
															.testimonials[2].img
													}
													width={579}
													height={720}
													alt='user image'
													className='object-cover h-14 w-14 rounded-full'
												/>
												<span className='absolute bottom-0  -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
													<Image
														src={
															testimonialContent.quoteImg
														}
														width={14}
														height={9}
														alt='quote'
													/>
												</span>
											</div>
											<div className='leading-3'>
												{testimonialContent
													.testimonials[2].name && (
													<strong className='block text-heading text-lg'>
														{" "}
														{
															testimonialContent
																.testimonials[2]
																.name
														}
													</strong>
												)}
												{testimonialContent
													.testimonials[2]
													.titleRole && (
													<span className='text-sm'>
														{
															testimonialContent
																.testimonials[2]
																.titleRole
														}
													</span>
												)}
											</div>
										</div>
										<div>
											<blockquote className='text-heading leading-relaxed'>
												‟
												{
													testimonialContent
														.testimonials[2]
														.testimony
												}
												”
											</blockquote>
										</div>
									</div>
									<div className='bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
