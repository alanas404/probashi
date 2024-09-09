import Newspaper from "./components/newspaper/Newspaper";
import Blog from "./components/blogs/Blog";
import Customer from "./components/customers/Customer";
import Tabs from "./components/tabs/Tabs";
import Hero from "./components/downloads/Hero";
import HelpDesk from "./components/downloads/HelpDesk";
import AfterMission from "./components/downloads/AfterMission";

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <Newspaper/> */}
      <Tabs/>
      {/* <Customer/>
      <Blog/> */}

      <HelpDesk/>
      <AfterMission/>
  
 
    </div>
  );
}
