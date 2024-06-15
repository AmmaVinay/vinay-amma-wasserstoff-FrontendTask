 import { GoNorthStar } from "react-icons/go";

function Marquee() {
    return (
           <>  {/* Marquee Section */}
  <section className=" w-28 h-[100%] bg-purple-300 overflow-hidden relative">
  <div className="absolute w-full h-full animate-marquee flex justify-start items-center">
    <span className="text-4xl text-black font-semibold flex flex-col " >
      <span className="flex" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', textAlign: 'start' }}><GoNorthStar/>Event : Oasis Bus tour , JLN Stadium , Delhi </span> <br />
      <span className="flex " style={{  fontFamily: 'Krona One, sans-serif', writingMode: 'vertical-rl', textOrientation: 'mixed', textAlign: 'start' }}><GoNorthStar />Collection Live : Meta Lives , live on astrix</span>
     </span>
  </div>
</section>
  </> 
      )
}

export default Marquee;
