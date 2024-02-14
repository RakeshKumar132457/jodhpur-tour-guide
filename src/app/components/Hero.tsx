import Image from "next/image";
import Link from "next/link";
import { heroContent } from "../contents/siteContent";
import { Button } from "../ui/Button";

const Hero = () => {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-5/12 mb-10 lg:mb-0">
                        {heroContent.text.subheading && (
                            <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                                {heroContent.text.subheading}
                            </span>
                        )}
                        {heroContent.text.heading && (
                            <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
                                {heroContent.text.heading}
                            </h1>
                        )}

                        {heroContent.text.description && (
                            <p className="leading-relaxed text-body mb-10">
                                {heroContent.text.description}
                            </p>
                        )}

                        <div className="flex space-x-3">
                            <Button
                                href={heroContent.ctaButton.href}
                                id={heroContent.ctaButton.id}
                                text={heroContent.ctaButton.text}
                            />
                        </div>
                    </div>

                    <div className="lg:w-6/12 space-y-2">
                        <div className="flex space-x-2 items-stretch">
                            <div className="w-8/12">
                                {heroContent.images.img1 && (
                                    <Image
                                        src={heroContent.images.img1.src}
                                        width={397}
                                        height={406}
                                        alt={heroContent.images.img1.alt}
                                        className="object-cover h-full w-full rounded-2xl"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                            <div className="w-4/12 self-end space-y-2">
                                <div className="grid grid-cols-2 gap-2">
                                    {heroContent.images.img2 && (
                                        <Image
                                            src={heroContent.images.img2.src}
                                            width={437}
                                            height={437}
                                            alt={heroContent.images.img2.alt}
                                            className="object-cover h-full w-full rounded-2xl"
                                        />
                                    )}
                                    <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                                </div>
                                {heroContent.images.img3 && (
                                    <Image
                                        src={heroContent.images.img3.src}
                                        alt={heroContent.images.img3.alt}
                                        width={374}
                                        height={392}
                                        className="object-cover h-full w-full rounded-2xl"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <div className="w-4/12">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-greenLight rounded-2xl rounded-bl-[200px]"></div>
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
                                                className="object-cover h-full w-full rounded-2xl"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="w-5/12">
                                {heroContent.images.img5 && (
                                    <Image
                                        src={heroContent.images.img5.src}
                                        width={446}
                                        height={495}
                                        alt={heroContent.images.img5.alt}
                                        className="object-cover h-full w-full rounded-2xl"
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
