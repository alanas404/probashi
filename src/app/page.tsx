import Newspaper from "./components/newspaper/Newspaper";
import Blog from "./components/blogs/Blog";
import Customer from "./components/customers/Customer";
import Tabs from "./components/tabs/Tabs";
import Hero from "./components/downloads/Hero";
import HelpDesk from "./components/downloads/HelpDesk";
import AfterMission from "./components/downloads/AfterMission";
import AmiprobashiArrow from "./components/downloads/AmiprobashiArrow";
import Image from "next/image";
import GoogleMap from "./GoogleMap";

/* Frame 1321315498 */

/* Auto layout */


export default function Home() {

  const weare = [
    {
      title:"Zero cost to government",
      image:"/weare/card1.svg",
      bg: "bg-[#2B2846] py-2.5 pl-[23px]",
    },
    {
      title:"Democratized Migration",
      image:"/weare/card2.svg",
      bg: "bg-[#187E7D] py-2.5 pl-[23px]",
    },
    {
      title:"Safeguarding Human Trafficking ",
      image:"/weare/card3.svg",
      bg: "bg-[#50237A] py-2.5 pl-[15px]",
    },
    {
      title:"Reduced Migration Time and Cost",
      image:"/weare/card4.svg",
      bg: "we-are-card-bg py-2.5 pl-[13px]",
    },

    {
      title:"Eliminating Middlemen",
      image:"/weare/card5.svg",
      bg: "bg-[#1E2D41] py-2.5 pl-[15px]",
    }
  ]
  return (
    <div>

      {/* <div className="m-5">

        <div className="flex gap-5">
        {
          weare.map(item =>   <div className="relative">
            <Image className="w-[150px] h-[206px] md:w-[218px] md:h-[300px]" src={item.image} width={218} height={300} alt="" />
            <div className={`${item.bg}  w-full rounded-tr-[30px] absolute bottom-[19.58px] md:bottom-[29px]`}>
              <p className="barlow font-normal text-sm md:text-2xl  text-white">{item.title}</p>
            </div>
          </div>)
        }
        </div>

      </div> */}








<GoogleMap/>







      {/* <Hero/> */}
      {/* <Newspaper/> */}
      {/* <Tabs/> */}
      {/* <Customer/>
      <Blog/> */}

      {/* <HelpDesk/> */}
      {/* <AfterMission/> */}

      {/* <AmiprobashiArrow/> */}


    </div>
  );
}
