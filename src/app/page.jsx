import Header from "@/components/Header";
import Head from "@/components/Head";
import About from "@/components/About";
import Shop from "@/components/Shop";



export default function Home() {
  return (
    <div className="w-full h-full ">
      <Header/>
      <Head />
      <About />
      <Shop />
    </div>
  );
}
