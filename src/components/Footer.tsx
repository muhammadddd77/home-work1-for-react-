
function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-12 md:px-12 lg:px-20 xl:px-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <p className="max-w-63 text-[12px] leading-5 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-base font-medium text-[#292929]">
            Home
          </h3>

          <div className="flex flex-col gap-3 text-[12px] text-gray-600">
            <a href="#booking" className="hover:text-[#20AD78]">Booking</a>
            <a href="#facilities" className="hover:text-[#20AD78]">Facilities</a>
            <a href="#location" className="hover:text-[#20AD78]">Location</a>
            <a href="#contact" className="hover:text-[#20AD78]">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-medium text-[#292929]">
            Help
          </h3>

          <div className="flex flex-col gap-3 text-[12px] text-gray-600">
            <a href="#about" className="hover:text-[#20AD78]">About Us</a>
            <a href="#help" className="hover:text-[#20AD78]">Help center</a>
            <a href="#privacy" className="hover:text-[#20AD78]">Privacy policy</a>
            <a href="#faqs" className="hover:text-[#20AD78]">FAQs</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-medium text-[#292929]">
            Get the app
          </h3>

          <div className="flex flex-col gap-3 text-[12px] text-gray-600">
            <a href="#ios" className="hover:text-[#20AD78]">iOS app</a>
            <a href="#android" className="hover:text-[#20AD78]">Android app</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
