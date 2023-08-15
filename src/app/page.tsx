import Hero from "./components/Hero";
import InstagramPosts from "./components/InstagramPosts";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

export default function Home() {
	return (
		<>
			<Hero />
			<Stats />
			<Services />
			<Solutions />
			<Testimonial />
			<InstagramPosts />
		</>
	);
}
