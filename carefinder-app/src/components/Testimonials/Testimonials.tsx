import line from "../../assets/line.png";
import sarah from "../../assets/sarah.png";
import rating from "../../assets/rating.png";
import john from "../../assets/john.png";
import emily from "../../assets/emily.png";

const Testimonials = () => {
  return (
    <section className="gap-16 bg-cf-white py-20 md:h-full md:pb-0">
      <div className="mx-20 flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-2">
            <img src={line} />
            <h1 className="text-bold text-4xl text-cf-blue">Testimonials</h1>
          </div>
          <p className="text-semibold mt-4 text-2xl text-cf-dark-gray">
            What Our Users Say
          </p>
        </div>
        <div className="my-6 grid w-full grid-rows-3 md:grid-cols-3 justify-center gap-8">
          <div className="flex flex-col items-start gap-4 rounded-xl bg-cf-white px-6 py-8 text-justify shadow-cf-shadow">
            <h3 className="text-semibold mb-2 text-base">
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. The search feature is user-friendly, and it provided
              me with all the essential information I needed. Highly recommended
            </h3>
            <img src={rating} alt="rating" />
            <div className="my-2 flex flex-row items-center gap-2">
              <img src={sarah} alt="sarah" />
              <h3 className="text-base text-cf-blue">Sarah M.</h3>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-xl bg-cf-white px-6 py-8 text-justify shadow-cf-shadow">
            <h3 className="text-semibold mb-2 text-base">
              {" "}
              When I needed urgent medical care while travelling, it helped me
              locate the nearest hospital in a matter of seconds. The accurate
              results and detailed directions saved me valuable time and ensured
              I received the care I needed. The best feature is the share
              option, such a life saver!
            </h3>
            <img src={rating} alt="rating" />
            <div className="my-2 flex flex-row items-center gap-2">
              <img src={john} alt="john" />
              <h3 className="text-base text-cf-blue">John D.</h3>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-xl bg-cf-white px-6 py-8 text-justify shadow-cf-shadow">
            <h3 className="text-semibold mb-2 text-base">
              I recently moved to a new city and had no idea where to go for
              medical assistance, my friend shared some hospital details using
              the carefinder website with me and it was a lifesaver! I was able
              to find a hospital near me in no time. I highly recommend this
              website!
            </h3>
            <img src={rating} alt="rating" />
            <div className="my-2 flex flex-row items-center gap-2">
              <img src={emily} alt="emily" />
              <h3 className="text-base text-cf-blue">Emily T.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
