import BoysSection from "../../Components/BoysSection/BoysSection";
import Courses from "../../Components/Courses/Courses";
import GirlsSection from "../../Components/GirlsSection/GirlsSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NavBar from "../../Components/NavBar/NavBar";
import ToolsSection from "../../Components/ToolsSection/ToolsSection";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <BoysSection></BoysSection>
            <ToolsSection></ToolsSection>
            <Courses></Courses>
            <GirlsSection></GirlsSection>
        </div>
    );
};

export default Home;