import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdAlarm } from "react-icons/io";
import { Fade } from "react-reveal";

export default function Collections() {
    return <div className="pl-12 pb-10">
        <div>
        <Fade top>
            <h1 className="font-bold w-[341px] h-[66px] left-[992px] text-3xl leading-tight mt-12 mb-8">Explore Youre First  Event</h1>
        </Fade>
        <Fade top>
             <h1 className="font-extrabold w-[352px] h-[71px] text-5xl leading-tight">Event Name</h1>
        
             <div className="flex items-center space-x-4 my-4">
                <div className="flex items-center space-x-2">
                    <IoLocationOutline className="text-xl" />
                    <p className="font-lexend font-semibold text-md leading-7">Venue</p>
                </div>
                <div className="flex items-center space-x-2">
                    <IoMdAlarm className="text-xl" />
                    <p className="font-lexend font-semibold text-md leading-7">04/3/2024 @19:00</p>
                </div>
            </div>
        </Fade>
        </div>
        <Fade bottom>
            <p className="text-base  w-[316px] h-[104px] text-[16px] leading-relaxed mb-4">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.       </p>
            <p className="text-xl font-bold mt-2 mb-10">Artist Lineup</p>
        </Fade>
         <div className="flex mb-12 items-center">
            <Fade left>
                <img className="w-[150px] rounded-l-lg h-[156px] -top-[3px] left-[951px]" src="https://s3-alpha-sig.figma.com/img/6aa2/8717/802c592e7915f9458ed0eccbd85f560b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzWYYqWs-ZNPPVF9DpFxcx7oHiPZtaQUiZXL6K~yvRfKSjZbM8MG3nsTztUlXgFcfhXzilLoJh74yNxT2aHadQgLa30dE0JeJZ4ON7tPCtL9rhv4mKUluatqM4dAlHbKIB-6pCfeACrQLqrer4n7ANr3XIilXFQ7XBqAgytkCPDjEMkTrTLbdQP-EXCHAyEauHGCcII8QGnAgv-EwHciBHPSAliebphEtSPwMDyOEkW5uZunkiUzB5psKr6skAPNgWDULIFOZj9ts7o~uBDr7WGLmoV9MW4E~~ZelXe59BPDKdMUE1FCYYkYTPI-EHOMAJ02Zg8fB446gj3dtWVowQ__" />
            </Fade>
            <Fade>
                <img className="w-[192px] h-[198px] rounded-lg top-[543px] left-[1084px]" src="https://s3-alpha-sig.figma.com/img/83e4/cf13/2a9680acaa7b9a4e257fe0c4a8a68d4f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YAe4r5Tbqcy13Pl5L~7Zb8NIpmNcyieGUx6fDsSYSYioweozDMKdyQMh8nB8pJ-TuE7Dgie-od3WLGvQ11BH-6k~~Kp2AcxnglHbj6rHg7wKIzfA8QEKxW5YZwNGQ1c8eG0sKs7r6okZdY2jAj-xSc3QxwzJQNu8Q3J387Gkb9fh8WHIN40Pnyr5zchf47dkxodaNpKb~yGMdVK-cA5m6L2Tkgd2f1iDmjh8RT6PQr1xiDp4K6lYeIY1W5x91R-soDEiOC0EPcPUnpsNWqLuTxukMRhEwjn4H0hFO3WiLFJBZcKTWv49zAqOj87kkuf2DlmEzobzOpuwpdY1TkC5VQ__"/>
            </Fade>
            <Fade right><img className="w-[145px] rounded-r-lg h-[156px] top-[-58px]" src="https://s3-alpha-sig.figma.com/img/dc5a/7843/593d34d04c8695561a6bc810b4c012c4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1DElJtq5b0JrNqqKZjvmljdg8iNK5bLYVcjapwF7oPu~nW14pdxbdurZvT5A6iVg3xMAriN9wX9IEPibK78iNzl-QS9hElfa3ZObRLjZW1rDmIbSUgmgBdc6iy8p37f2TrfbAOd2bqtGdU1FraowY2DxoN87XaMz8pUoqFS2ES2Y600u9PL7LEq-bBT6EWkSaR6-1zrQ9oalReEg0M50JqSvku0OMCDr7xOO9ZuxIsJr-5v8zJpTe7GXN9mH7XAvDpbu~FClcT7snKeacTP26J06FtrbRbLH61kUJISokERc0AiTk3ztAYMs5AmuYfNcMRHc-w1ZOTGWIV2Hls8VA__"/></Fade>
            
        </div>

        <div className="flex justify-between">
            <Fade bottom>
                <img className=" w-[105px] h-[105px] bg-gray-300" src="https://s3-alpha-sig.figma.com/img/10c8/57c1/6626f7571ba3a9e6a8b8ba8dcc94a192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvKpgJkI8CgqMmYZ71mWXsLTFJnJ~BhnRnSNvwaOVaUEQhpbFJq-0lTnCtjwjjJKIqYVMQr7027YP0NlSrrt~UIg3ExRyihDI~Rvr3CPzZbZmTZxSd5g40U5GRybhOC94F24c841-0cu21IlUFWl6L8m7yvkgUiGv1DXk1vzWKWxFRVTvtcvxsLatDpK35czAw4b8X5ffgNXwEWxa2V7Egn2FoMq8G9mkjIzYU79gvqhsY1FCaTsTPU8Y9eAdovRgosYFEHPkEf36EuKAPaas3clsNyC3FESiSNBtbsk4Hx3UjGdqiXcgT1DdOO6lm4BmTuPpCATiD~Q2e8pETiOxQ__" />
                 <div className=" self-end animate-pulse">
                    <button className="text-black w-[154px] font-extrabold  text-center bg-[#FFCA5F]  rounded-full py-3 px-4">Join Waitlist </button>
                </div>
            </Fade>
            
        </div>
      </div>
}
