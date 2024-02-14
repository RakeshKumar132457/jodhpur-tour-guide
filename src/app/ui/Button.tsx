import Link from "next/link";
import React from "react";

interface ButtonProps {
    id: string;
    href: string;
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ href, id, text }) => {
    return (
        <React.Fragment>
            <Link
                href={href}
                className=" py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
                id={id}
            >
                {text}
            </Link>
        </React.Fragment>
    );
};
