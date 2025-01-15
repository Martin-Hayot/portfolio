import StarField from "./StarField";
import Navbar from "./navigation/NavBar";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div>
            <header className="h-screen overflow-x-hidden">
                <div className="relative">
                    <StarField />
                    <div className="absolute w-full h-screen">
                        <div className="absolute top-0 left-0 h-[134px] w-[134px] md:h-[200px] md:w-[200px] lg:w-[300px] lg:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-70"></div>
                        <div className="absolute bottom-0 right-20 h-[134px] w-[134px] md:w-[300px] md:h-[300px] 3xl:w-[380px] 3xl:h-[380px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-70"></div>
                    </div>
                </div>
                <Navbar />

                <div className="flex flex-col justify-center items-center mx-2 lg:flex-row">
                    <h1 className="text-6xl xl:text-8xl 3xl:text-[10rem] md:text-8xl text-white text-center pt-10 lg:text-left lg:pt-40 lg:mt-20 lg:ml-20 z-10">
                        <span>Welcome to</span>
                        <br />
                        <span className="lg:pl-20 bg-gradient-to-br from-orange-500 from-10% to-purple-600 inline-block text-transparent bg-clip-text">
                            Martin's space
                        </span>
                    </h1>
                    <div className="flex relative mx-auto mt-20 md:mt-32 lg:mt-60 3xl:mt-72">
                        <img
                            src="astro_earth.png"
                            className="h-48 w-48 md:w-60 md:h-60 3xl:w-80 3xl:h-80"
                        />
                        <img
                            src="martin.jpeg"
                            className="absolute w-16 h-16 left-16 top-16 rounded-full animate-orbit-sm z-0 md:hidden cursor-pointer"
                        />
                        <img
                            src="martin.jpeg"
                            className="hidden absolute w-20 h-20 left-20 top-20 md:block xl:hidden rounded-full animate-orbit-md z-0 cursor-pointer"
                        />
                        <img
                            src="martin.jpeg"
                            className="hidden xl:block 3xl:hidden w-24 h-24 animate-orbit-lg rounded-full absolute left-20 top-20 z-0 cursor-pointer"
                        />
                        <img
                            src="martin.jpeg"
                            className="hidden 3xl:block w-24 h-24 animate-orbit-xl rounded-full absolute left-24 top-24 z-0 cursor-pointer"
                        />
                    </div>
                </div>
            </header>
            <div
                className="cursor-pointer hidden lg:block -mt-32 3xl:-mt-32"
                onClick={() =>
                    document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <div className="loader relative mx-auto"></div>
                <p className="hidden relative text-neutral-200 md:block md:text-xl md:text-center md:mt-2">
                    scroll down
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
