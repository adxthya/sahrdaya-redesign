import HomeNavbar from "@/components/homenavbar";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import ProfileCard from "@/components/profilecard";
import ImageSlider from "@/components/imageslider";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-5 pt-5">
        <FaFacebook
          size={24}
          color="#4267B2"
        />
        <FaInstagram
          size={24}
          color="#E1306C"
        />
        <FaLinkedin
          size={24}
          color="#0077B5"
        />
      </div>
      <div className="px-60">
        <Image
          src="/sahrdaya-banner.webp"
          alt="Sahrdaya Banner"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <HomeNavbar />
      <ImageSlider />
      <div className="px-40 grid grid-cols-3 gap-10">
        <div className="bg-blue-800 p-5 text-white flex flex-col gap-5 rounded-lg">
          <div className="flex gap-2 items-center text-2xl font-semibold">
            <FaGoogleScholar />
            <p>Programs Offered</p>
          </div>
          <div className="w-64">
            <p>
              Sahrdaya College of Engineering & Technology offers Six UG(B.Tech)
              Programmes, three PG(M.Tech) & Doctoral(Ph.D) Programmes in
              various branches of study.
            </p>
          </div>
        </div>
        <div className="bg-green-600 p-5 text-white flex flex-col gap-5 rounded-lg">
          <div className="flex gap-2 items-center text-2xl font-semibold">
            <MdWork />
            <p>Placement Statistics</p>
          </div>
          <div className="w-64">
            <p>
              Training and Placement Department helps students develop their
              Intrapersonal skills and abilities so as to enhance their
              personality as well as help them get placed in reputed
              organizations.
            </p>
          </div>
        </div>
        <div className="bg-red-600 p-5 text-white flex flex-col gap-5 rounded-lg">
          <div className="flex gap-2 items-center text-2xl font-semibold">
            <IoIosStats />
            <p>Placement Statistics</p>
          </div>
          <div className="w-64">
            <p>
              Sahrdaya have bagged many achievements beginning from its
              inception. Ranked top in B.Tech results in the state of Kerala
              Consistently. Top pass percentage and Topper-1 college under
              University
            </p>
          </div>
        </div>
      </div>
      <div className="px-40 py-10">
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-medium">About Us</p>
          <Image
            src="/sahrdaya.webp"
            alt="sahrdaya"
            width={500}
            height={500}
            className="rounded-lg overflow-hidden"
          />
          <p>
            Irinjalakuda Diocese was established in the year 1978, and His
            Excellency Mar James Pazhayattil took over the reins as the first
            Bishop of this Diocese. Irinjalakuda Diocese is doing a excellent
            service meeting the needs of Education, Health and Social
            responsibilities. Considering the demands on the necessity of value
            based higher technical education
          </p>
          <div className="w-full flex gap-5 justify-center">
            <button className="bg-black text-white px-5 py-2 rounded-full">
              Read More
            </button>
            <button className="border-2 border-gray-600 text-black px-5 py-2 rounded-full hover:bg-gray-100">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 pb-10 px-40">
        <p className="text-2xl font-medium">Our Highlights</p>
        <div className="grid grid-cols-2 gap-10 ">
          <Image
            src="/company.webp"
            alt="Hiring Companies"
            width={500}
            height={500}
          />
          <Image
            src="/placement.webp"
            alt="Placements"
            width={500}
            height={500}
            className="h-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 pb-10 gap-10 px-40">
        <div className="flex flex-col pb-10 gap-10">
          <div>
            <p className="text-2xl font-medium text-left">BTech Programmes</p>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <p>BioMedical Engineering</p>
            <p>Biotechnology</p>
            <p>Civil Engineering</p>
            <p>Computer Science & Engineering</p>
            <p>Electrical & Electronics Engineering</p>
            <p>Electronics & Communication Engineering</p>
          </div>
        </div>
        <div className="flex flex-col pb-10 gap-10">
          <div>
            <p className="text-2xl font-medium text-left">MTech Programmes</p>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <p>Computer Science and Engineering (CSE)</p>
            <p>Embedded Systems (ES)</p>
            <p>Industrial Biotechnology (IBT)</p>
          </div>
        </div>
        <div className="flex flex-col pb-10 gap-10">
          <div>
            <p className="text-2xl font-medium text-left">Phd Programmes</p>
          </div>
          <div className="flex flex-col gap-2 text-lg">
            <p>Biotechnology</p>
            <p>Computer Science and Engineering</p>
            <p>Electronics and Communications</p>
            <p>Chemistry</p>
          </div>
        </div>
      </div>
      <div className="px-40 pb-10 flex flex-col gap-10">
        <div>
          <p className="text-3xl font-medium">Our Team</p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <ProfileCard
            image="/anto.webp"
            name="Rev. Fr. Dr. Anto Chungath"
            designation="Executive Director"
          />
          <ProfileCard
            image="/leon.webp"
            name="Dr Leon Ittiachen"
            designation="Director"
          />
          <ProfileCard
            image="/sudha.webp"
            name="Dr Sudha George Valavi"
            designation="Joint Director"
          />
          <ProfileCard
            image="/nixon.webp"
            name="Dr Nixon Kuruvila"
            designation="Principal"
          />
          <ProfileCard
            image="/finto.webp"
            name="Dr Finto Raphael"
            designation="Vice Principal"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 pb-10 px-40 pt-10">
        <p className="text-3xl font-medium text-center">Contact US</p>
        <div className="px-40">
          <form
            action=""
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="border-2 border-gray-300 rounded-md h-10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="border-2 border-gray-300 rounded-md h-10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="border-2 border-gray-300 rounded-md h-20"
              ></textarea>
            </div>
            <button className="border-2 border-gray-400 w-fit self-end px-4 py-1 rounded-lg hover:bg-gray-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
