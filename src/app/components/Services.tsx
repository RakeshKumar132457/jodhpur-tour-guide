import React from "react";
import Image from "next/image";
import { servicesContent } from "../contents/siteContent";

const Services = () => {
    return (
        <section className="py-20 bg-light">
            <div className="container px-4 mx-auto">
                <div className="max-w-xl mx-auto text-center mb-20">
                    {servicesContent.heading.headingSubTitle && (
                        <span className="inline-block py-0.5 z-10 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                            {servicesContent.heading.headingSubTitle}
                        </span>
                    )}
                    {servicesContent.heading.headingTitle && (
                        <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                            {servicesContent.heading.headingTitle}
                        </h2>
                    )}

                    {servicesContent.heading.description && (
                        <p className="text-body leading-relaxed">
                            {servicesContent.heading.description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {servicesContent.items.map((item, idx) => {
                        return (
                            <div className="flex space-x-10" key={idx}>
                                <div className="w-14 shrink-0">
                                    <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl ">
                                        <Image
                                            src={item.icon}
                                            alt="user icon"
                                            width={62}
                                            height={62}
                                        />
                                    </span>
                                </div>
                                <div>
                                    {item.title && (
                                        <h3 className="text-heading font-bold text-md mb-3">
                                            {item.title}
                                        </h3>
                                    )}

                                    {item.description && (
                                        <p className="leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
