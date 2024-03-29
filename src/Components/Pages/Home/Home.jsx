import About from "../About/About"
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact"
import QS from "../QS/QS"
import RecentProject from "../RecentProject/RecentProject"
import Service from "../Service/Service"
import Skill from "../Skill/Skill"
import TopProject from "../TopProject/TopProject"

const Home = () =>{
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Service></Service>
            <TopProject></TopProject>
            <RecentProject></RecentProject>
            <QS></QS>
            <Contact></Contact>
        </div>
    )
}

export default Home