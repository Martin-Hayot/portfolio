import { Heart, Shield } from "lucide-react";

const NavigationSidebar = ({ setOpen }: { setOpen: Function }) => {
    return (
        <div className="ml-6 mt-6">
            <nav className="flex flex-col text-4xl mt-12 gap-y-5 text-nowrap">
                <ul className="flex flex-col gap-y-5">
                    <li>
                        <a
                            href="/"
                            className="text-primary hover:text-accent transition-all duration-100 ease-out"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/projects"
                            className="text-primary hover:text-accent transition-all duration-100 ease-out"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="text-primary hover:text-accent transition-all duration-100 ease-out"
                        >
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationSidebar;
