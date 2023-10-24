import BoysSection from "../../Components/BoysSection/BoysSection";
import Courses from "../../Components/Courses/Courses";
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
        </div>
    );
};

export default Home;