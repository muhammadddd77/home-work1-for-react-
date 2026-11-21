import manager from "../../assets/images/manager.png";
import chef from "../../assets/images/chef.png";

function Section2() {
  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-12 px-12">

        <div>
          <h2 className="text-center font-serif text-3xl font-bold">
            Restaurant Manager
          </h2>

          <p className="mt-2 text-center text-xs text-gray-600">
            Carron Huan
          </p>

          <img
            src={manager}
            alt="Restaurant Manager"
            className="mt-4 h-80 w-full object-cover"
          />

          <p className="mt-20 text-right text-xs leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Et in sed pellentesque
            ornare nunc elit. Aenean condimentum.
          </p>
        </div>

        <div>
          <p className="mt-4 text-xs leading-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Et in sed pellentesque
            ornare nunc elit.
          </p>

          <div className="mt-20">
            <h2 className="text-center font-serif text-3xl font-bold">
              Executive Chef
            </h2>

            <p className="mt-2 text-center text-xs text-gray-600">
              Jane Cooper
            </p>

            <img
              src={chef}
              alt="Executive Chef"
              className="mt-4 h-80 w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section2;