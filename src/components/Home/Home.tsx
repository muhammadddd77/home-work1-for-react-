import food from "../../assets/images/image.png";

function Home() {
  return (
    <main className="bg-[#202B00] text-white">
      <section className="mx-auto flex min-h-175 max-w-360 items-center justify-between pl-16 pr-16 pt-20 pb-20">
        <div className="w-1/2">
          <h1 className="font-serif text-[5.3125rem] leading-[1.1]">
            Healthy Eating
            <br />
            is important
            <br />
            part of lifestyle
          </h1>

          <p className="mt-8 max-w-87.5 text-sm leading-7 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Neque congue arcu.
          </p>
        </div>

        <div className="w-1/2">
          <img src={food} alt="Healthy food" className="h-130 w-full object-cover" />
        </div>
      </section>
    </main>
  );
}

export default Home;