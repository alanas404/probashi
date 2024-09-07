import Newspaper from "./components/newspaper/Newspaper";
import Blog from "./components/blogs/Blog";
import Customer from "./components/customers/Customer";
import Tabs from "./components/tabs/Tabs";

export default function Home() {
  return (
    <div>
      <Newspaper/>
      <Tabs/>
      <Customer/>
      <Blog/>
  
 
    </div>
  );
}
