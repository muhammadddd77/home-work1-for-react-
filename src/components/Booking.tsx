import { Link } from "react-router-dom";
import Header from "./Header";

import foto1 from "../assets/images/foto1.png";
import foto2 from "../assets/images/foto2.png";
import foto3 from "../assets/images/foto3.png";
import foto4 from "../assets/images/foto4.png";
import foto5 from "../assets/images/foto5.png";
import foto6 from "../assets/images/foto6.png";
import foto7 from "../assets/images/foto7.png";

function Booking() {
  return (
    <>
      <Header />

      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative min-h-96">
            <img
              src={foto7}
              alt="Hotel"
              className="ml-auto h-80 w-10/12 rounded-xl object-cover"
            />

            <div className="absolute bottom-0 left-0 w-56 rounded-md bg-white p-4 shadow-xl">
              <img
                src={foto5}
                alt="Seller"
                className="absolute -right-4 -top-5 h-12 w-12 rounded-full border-4 border-white object-cover"
              />

              <h3 className="text-sm font-medium">Milan Jack</h3>

              <div className="mt-1 flex items-center gap-3">
                <p className="text-xs text-gray-400">Home Seller, USA</p>
                <p className="text-xs text-[#20AD78]">★ 4.9 Rating</p>
              </div>

              <p className="mt-3 text-xs leading-5 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro beatae error laborum.
              </p>
            </div>

            <div className="absolute bottom-7 right-0 flex gap-4">
              <img
                src={foto1}
                alt="Hotel"
                className="h-16 w-28 rounded-xl object-cover"
              />

              <img
                src={foto2}
                alt="Hotel"
                className="h-16 w-28 rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center py-5">
            <p className="text-xs text-[#20AD78]">
              London NW8 7JT England
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-[#292929]">
              Danubius Hotel Regents Park
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-5">
              <p className="text-sm font-semibold">$200 Par Night</p>

              <div className="h-5 border-l border-gray-200"></div>

              <p className="text-sm">
                <span className="text-[#FF5959]">★★★★</span>
                <span className="text-gray-300">★</span>
                <span className="ml-2 text-gray-600">4.8</span>
              </p>
            </div>

            <p className="mt-7 text-xs leading-6 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s. It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <button className="mt-7 self-end rounded-full bg-[#20AD78] px-8 py-3 text-xs font-medium text-white transition hover:bg-[#168c60]">
              To book Now
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:px-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#292929]">
              Our most popular Hotels
            </h2>

            <p className="mt-3 max-w-sm text-xs leading-6 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <button className="rounded-full bg-[#E8F7F1] px-5 py-3 text-xs text-[#20AD78]">
            View All
          </button>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl bg-[#FAFAFA]">
            <img
              src={foto1}
              alt="Danubius Hotel Regents Park"
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-xs text-[#20AD78]">
                London NW8 7JT England
              </p>

              <h3 className="mt-2 text-base font-medium">
                Danubius Hotel Regents Park
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs">$200 Par Night</p>

                <p className="text-xs">
                  <span className="text-[#FF5959]">★★★★</span>
                  <span className="text-gray-300">★</span> 4.8
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-[#FAFAFA]">
            <img
              src={foto2}
              alt="The Resident Soho"
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-xs text-[#20AD78]">
                London NW8 7JT England
              </p>

              <h3 className="mt-2 text-base font-medium">
                The Resident Soho
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs">$200 Par Night</p>

                <p className="text-xs">
                  <span className="text-[#FF5959]">★★★★</span>
                  <span className="text-gray-300">★</span> 4.8
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-[#FAFAFA]">
            <img
              src={foto3}
              alt="London Bridge Hotel"
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-xs text-[#20AD78]">
                London NW8 7JT England
              </p>

              <h3 className="mt-2 text-base font-medium">
                London Bridge Hotel
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs">$200 Par Night</p>

                <p className="text-xs">
                  <span className="text-[#FF5959]">★★★★</span>
                  <span className="text-gray-300">★</span> 4.8
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12">
        <div className="grid overflow-hidden rounded-xl bg-[#F3FAF7] md:grid-cols-2">
          <div className="min-h-64">
            <img
              src={foto4}
              alt="Our History"
              className="h-full min-h-64 w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <h2 className="text-2xl font-semibold text-[#292929]">
              Discover our History
            </h2>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy.
            </p>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>

            <button className="mt-7 w-fit rounded-full bg-[#20AD78] px-6 py-3 text-xs text-white transition hover:bg-[#168c60]">
              Explore More
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-12">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-[#172033]">
            Frequently Asked
          </h2>

          <h2 className="text-2xl font-semibold leading-tight text-[#20AD78]">
            Questions
          </h2>

          <p className="mt-3 max-w-xs text-xs leading-5 text-gray-500">
            You can book massages 7 days a week from 6 am to 11 pm,
            including public holidays.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <details open className="group rounded-md border border-gray-300 bg-white px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium text-[#292929]">
              How Far Is Nearest Bus Station ?
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip.
            </p>
          </details>

          <details className="group rounded-md border border-gray-300 bg-white px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium text-[#292929]">
              Why this project is better than others ?
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </details>

          <details className="group rounded-md border border-gray-300 bg-white px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium text-[#292929]">
              Estimated time of completion ?
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </details>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 items-center md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex min-h-64 flex-col items-center justify-center rounded-2xl bg-white shadow-lg md:mr-12">
            <svg
              viewBox="0 0 180 65"
              width="180"
              height="65"
              fill="none"
              stroke="#222222"
              strokeWidth="1.5"
            >
              <path d="M35 35 L65 12 L95 35" />
              <path d="M50 35 L78 12 L110 35" />
            </svg>

            <h2 className="mt-2 text-xl tracking-widest text-[#292929]">
              Perfect Place
            </h2>
          </div>

          <div className="flex min-h-64 flex-col justify-center rounded-xl bg-[#EAF7F1] px-8 py-10 md:pl-20 lg:px-16 lg:pl-24">
            <h2 className="text-xl font-semibold text-[#222222]">
              About Us
            </h2>

            <p className="mt-4 text-xs leading-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>

            <p className="mt-4 text-xs leading-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>

            <button className="mt-5 w-fit rounded-full bg-[#20AD78] px-5 py-2.5 text-xs text-white transition hover:bg-[#168c60]">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section id="location" className="w-full px-6 py-12 md:px-12">
        <div className="relative mx-auto min-h-80 max-w-6xl overflow-hidden rounded-xl">
          <img
            src={foto6}
            alt="Location"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <h2 className="absolute left-10 top-8 text-2xl font-bold tracking-widest text-[#292929]">
            United States
          </h2>

          <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20AD78]/20">
              <div className="h-3 w-3 rounded-full bg-[#20AD78]"></div>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 flex w-11/12 -translate-x-1/2 flex-col items-center justify-between gap-4 rounded-xl bg-white px-6 py-5 shadow-lg md:flex-row md:px-8">
            <div>
              <h2 className="text-lg font-semibold text-[#292929]">
                Location of our Hotels
              </h2>

              <p className="mt-2 max-w-xs text-xs leading-5 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's.
              </p>
            </div>

            <div className="flex w-full items-center gap-2 rounded-full bg-gray-50 p-1 md:w-2/5">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none"
              />

              <button className="rounded-full bg-[#20AD78] px-6 py-3 text-xs text-white transition hover:bg-[#168c60]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-white px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="max-w-52 text-xs leading-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium">Home</h3>

            <div className="flex flex-col gap-3 text-xs text-gray-600">
              <Link to="/" className="hover:text-[#20AD78]">
                Home
              </Link>

              <Link to="/booking" className="hover:text-[#20AD78]">
                Booking
              </Link>

              <Link to="/#facilities" className="hover:text-[#20AD78]">
                Facilities
              </Link>

              <Link to="/#location" className="hover:text-[#20AD78]">
                Location
              </Link>

              <Link to="/#contact" className="hover:text-[#20AD78]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium">Help</h3>

            <div className="flex flex-col gap-3 text-xs text-gray-600">
              <Link to="/#about" className="hover:text-[#20AD78]">
                About Us
              </Link>

              <Link to="/#help" className="hover:text-[#20AD78]">
                Help center
              </Link>

              <Link to="/#privacy" className="hover:text-[#20AD78]">
                Privacy policy
              </Link>

              <Link to="/#faqs" className="hover:text-[#20AD78]">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium">Get the app</h3>

            <div className="flex flex-col gap-3 text-xs text-gray-600">
              <a href="#ios" className="hover:text-[#20AD78]">
                iOS app
              </a>

              <a href="#android" className="hover:text-[#20AD78]">
                Android app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Booking;
