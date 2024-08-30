import ComputerIcon from "../../../icons/ComputerIcon";
import MoonIcon from "../../../icons/MoonIcon";
import ThemeableIcon from "../../../icons/ThemeableIcon";
import Thunder from "../../../icons/Thunder";
import BlurredCard from "./BlurredCard";

const Cards = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 lg:mt-32 max-w-[1300px] mx-auto pb-20 px-8">
      <BlurredCard svg={<Thunder />} title="Fast">
        <p>
          Spend less time writing UI code and more time building a great
          experience for your customers.
        </p>
      </BlurredCard>
      <BlurredCard svg={<ThemeableIcon />} title="Themeable">
        <p>
          You can customize the components with a multitude of properties to
          suit your preferences.
        </p>
      </BlurredCard>
      <BlurredCard
        svg={<MoonIcon props="text-pred dark:text-pyellow" />}
        title="Light and Dark"
      >
        <p>
          Automatic dark mode: MiracleUI instantly switches themes when it
          detects HTML theme prop changes.
        </p>
      </BlurredCard>
      <BlurredCard svg={<ComputerIcon />} title="Unique DX">
        <p>
          MiracleUI is fully-typed to minimize the learning curve, and provide
          the best possible developer experience.
        </p>
      </BlurredCard>
    </section>
  );
};

export default Cards;
