import Thunder from "../../../icons/Thunder";
import BlurredCard from "./BlurredCard";

const Cards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-32 max-w-[1300px] mx-auto px-7 pb-20">
      <BlurredCard svg={<Thunder />} title="Fast">
        <p>
          Spend less time writing UI code and more time building a great
          experience for your customers.
        </p>
      </BlurredCard>
      <BlurredCard svg={<Thunder />} title="Fast">
        <p>
          Spend less time writing UI code and more time building a great
          experience for your customers.
        </p>
      </BlurredCard>
      <BlurredCard svg={<Thunder />} title="Fast">
        <p>
          Spend less time writing UI code and more time building a great
          experience for your customers.
        </p>
      </BlurredCard>
      <BlurredCard svg={<Thunder />} title="Fast">
        <p>
          Spend less time writing UI code and more time building a great
          experience for your customers.
        </p>
      </BlurredCard>
    </section>
  );
};

export default Cards;
