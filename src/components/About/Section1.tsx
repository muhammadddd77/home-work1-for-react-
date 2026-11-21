import image from "../../assets/images/a2.png";

function Section1() {
  return (
    <section className="bg-white py-20 text-[#202B00]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-16 px-12">
        <div>
          <img
            src={image}
            alt="Restaurant food"
            className="h-96 w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-[#5B6500]">Our Story</p>

          <h2 className="mt-4 font-serif text-5xl font-bold leading-tight">
            We cook with love and passion
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            FoodZero started with a simple idea: bringing people together
            through delicious and healthy food.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            We believe that every meal should be special. Our team works
            with fresh ingredients to create beautiful and memorable dishes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
