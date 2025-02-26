import { NavigationMenuItem } from "../types/contentTypes";

export const heroContent = {
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

export const instagramPosts = {
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
    ],
    cta: {
        href: "/blog",
        label: "To view all posts,",
        labelSuffix: "click here",
    },
};

export const servicesContent = {
    heading: {
        headingSubTitle: "Explore Jodhpur Like Never Before",
        headingTitle: "Our Exclusive Services",
        description:
            "Discover the rich history, vibrant markets, and majestic forts of Jodhpur with our specialized tour packages.",
    },
    items: [
        {
            icon: "/images/icon-6.svg",
            title: "Historic Fort Tours",
            description:
                "Experience the grandeur of Mehrangarh Fort and other iconic landmarks.",
        },
        {
            icon: "/images/icon-6.svg",
            title: "Market Excursions",
            description:
                "Explore the bustling Sardar Market and shop for unique souvenirs.",
        },
        {
            icon: "/images/icon-6.svg",
            title: "Cultural Experiences",
            description:
                "Immerse yourself in local traditions, cuisine, and performances.",
        },
        {
            icon: "/images/icon-6.svg",
            title: "Luxury Packages",
            description:
                "Enjoy a premium experience with exclusive access and amenities.",
        },
        {
            icon: "/images/icon-6.svg",
            title: "Adventure Activities",
            description:
                "Get your adrenaline pumping with desert safaris and zip-lining.",
        },
        {
            icon: "/images/icon-6.svg",
            title: "Customized Tours",
            description:
                "Tailor your journey to fit your interests and schedule.",
        },
    ],
};

export const statsContent = {
    stats: [
        { number: "8+", label: "Years Experience" },
        { number: "5000+", label: "Satisfied Adventurers" },
        { number: "4.8", label: "Average Rating" },
    ],
    getStarted: {
        heading: "Ready to Discover Jodhpur?",
        description:
            "Embark on a tailored journey through the Blue City's rich history and vibrant culture.",
        img: "/images/illustration-woman.svg",
        cta: {
            cta_href: "#",
            cta_label: "Start Your Adventure",
        },
    },
};

export const navigationMenu: NavigationMenuItem[] = [
    {
        id: 1,
        href: "#",
        label: "Home",
        name: "home",
    },
    {
        id: 2,
        href: "#",
        label: "Contact",
        name: "contact",
    },
    {
        id: 3,
        href: "#",
        label: "About",
        name: "about",
    },
];
