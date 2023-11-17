"use client"; 
import { reviews } from "@/assets/icons/data/Reviews";
import { whyChooseData } from "@/assets/icons/data/WhyChooseData";
import FaqCard from "@/components/FaqCard/FaqCard";
import Header from "@/components/Header/Header";
import PageBtn from "@/components/PageBtn/PageBtn";
import ProductCard from "@/components/ProductCard/ProductCard";
import ReviewCards from "@/components/ReviewCards/ReviewCards";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";
import { useUserAuth } from "@/context/UserAuthContext";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {Cloudinary} from "@cloudinary/url-gen"; 
import {fill} from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

import { useState } from "react";
import Notification from "@/components/Notification/Notification";


export default function Home() {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud  
  const [cloudName] = useState("abj");
  // Replace with your own upload preset
  const [uploadPreset] = useState("fzevswcc");

  const router = useRouter();
  const { user, logOut } = useUserAuth();


  // cld.3

   const productCard = [
    {
      title: "Create Sellers Account.",
      text: "Add product details and start selling.",
      color: "#26264C",
    },
    {
      title: "Upload Store Details.",
      text: "Add product details and start selling.",
      color: "#7979F1",
    },
    {
      title: "Upload Product Details.",
      text: "Add product details and start selling.",
      color: "#F17997",
    },
  ];
  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  const cld = new Cloudinary({cloud: {cloudName: 'abj'}});
  const myImage = cld.image(publicId);
  myImage.resize(fill().width(20).height(20));
  return (
    <main className="text-black">
      <Header />
      <section className="p-5 lg:p-24 text-center flex flex-col items-center justify-center ">
        <div className="text-center w-full md:w-8/12 lg:w-6/12 mb-10">
          <h1 className={`mb-3 text-4xl font-bold text-black mt-10 lg:mt-5`}>
            Supercharge your sales with a simple website.
          </h1>
          {/* <Notification/> */}
          <p className="mb-5 text-black">
            Our multivendor platform can help. With a range of tools and
            features, you can take your business to new heights.
          </p>

          <PageBtn
            onClick={() => {
              router.push("/login");
            }}
          >
            Start Selling!
          </PageBtn>
        </div>
        <Image
          className="border-4 border-black border-opacity-100 drop-shadow-[0_4px_20px_0px_rgba(255,51,101,0.1)] rounded-xl"
          src="/images/Dashboard-Home.png"
          alt=""
          width={1000}
          height={500}
        />
        <div className="mt-14 w-full md:w-6/12 lg:w-4/12">
          <h1 className=" text-2xl font-bold">
            Sell your products in three easy steps.
          </h1>
        </div>
        <div className="py-10 px-0  lg:px-28 flex flex-wrap lg:flex-nowrap justify-center gap-10 w-full">
          {productCard.map((data, index) => {
            return <ProductCard key={index} index={index + 1} {...data} />;
          })}
        </div>
      </section>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
      {/* <AdvancedImage cldImg={myImage} /> */}
          {/* {JSON.stringify(myImage)} */}
      <AdvancedImage
          style={{ width: "50px" }}
          
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      <section className="bg-[#D0D0FB] p-5 lg:p-10 ">
        <div className="text-center flex justify-center ">
          <h1 className="text-2xl font-bold my-10 w-full lg:w-3/12">
            Why Choose Lunnex?
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-stretch mb-10">
          {whyChooseData.map((data, index) => {
            return <WhyChooseCard key={index} {...data} />;
          })}
        </div>
      </section>
      <section className="flex p-5 lg:p-10 flex-wrap lg:flex-nowrap my-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            className="border-4 border-black border-opacity-100 drop-shadow-[0_4px_20px_0px_rgba(255,51,101,0.1)] rounded-xl"
            src="/images/Android-Large.png"
            alt=""
            width={250}
            height={200}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-start flex flex-col  justify-center my-12 ">
          <h1 className=" text-2xl font-bold  text-black">
            Ready to take the next step in growing your business online?
          </h1>
          <p className="my-5 text-sm  text-black">
            Sign up for a free trial or explore our pricing plans to get
            started. Join thousands of satisfied store owners who trust{" "}
            <strong className="   font-semibold"> LUNNEX </strong>
            to create their websites.
          </p>
          <div className="flex items-center justify-around lg:justify-start">
            <PageBtn
              onClick={() => {
                router.push("/login");
              }}
            >
              Start Selling
            </PageBtn>
          </div>
        </div>
      </section>
      <section className="bg-[#26264C] text-white p-5 lg:p-10 py-10">
        <div className="text-center">
          <h1 className="mb-10 text-2xl font-bold">What Our Users Say</h1>

          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center justify-center py-8">
            {reviews.slice(0, 3).map((data, index) => {
              return <ReviewCards key={index} {...data} />;
            })}
          </div>
        </div>
      </section>
      <section className="flex flex-wrap lg:flex-nowrap p-5 lg:p-10">
        <div className="w-full lg:w-2/5">
          <ul className="font-semibold text-[#181818] border-b-2 lg:border-b-0 lg:border-s-2  box-content my-6 flex lg:block text-xs ">
            <li className="cursor-pointer px-4 py-3 border-b-4 lg:border-b-0 lg:border-s-4 border-[#FF3365]  mb-[-3px] lg:mb-0 lg:ms-[-3px] ">
              Popular FAQs
            </li>
            <li className="cursor-pointer px-4 py-3 ms-[-3px]  opacity-50 hover:opacity-100">
              How to get started
            </li>
            <li className="cursor-pointer px-4 py-3 ms-[-3px] opacity-50 hover:opacity-100">
              Questions about delivery{" "}
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col mt-5">
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />

          <div className=" text-center my-10">
            <h1 className=" text-2xl font-bold  text-black">
              Expand your business today!
            </h1>
            <p className="my-4 text-sm  text-black">
              Join our community of top-rated sellers and start selling your
              products to a wider audience.{" "}
            </p>
            <PageBtn
              onClick={() => {
                router.push("/login");
              }}
            >
              Start Selling!
            </PageBtn>
          </div>
        </div>
      </section>
    </main>
  );
}
