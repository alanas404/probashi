import Newspaper from "./components/newspaper/Newspaper";
import Blog from "./components/blogs/Blog";
import Customer from "./components/customers/Customer";

export default function Home() {
  return (
    <div>
      <Newspaper/>
      <Customer/>
      <Blog/>
 
    </div>
  );
}
