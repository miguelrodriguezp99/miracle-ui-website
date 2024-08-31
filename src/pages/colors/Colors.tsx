import Button from "../../components/button/Button";
import Slate from "./components/Slate";

import { colors } from "../../lib/colorsList";

export default function Colors() {
  return (
    <div className="max-w-[1400px] mx-auto pb-20 px-8">
      <section className="mt-12 ">
        <div className="text-pblack dark:text-pwhite">
          <h1 className=" text-4xl font-bold">Miracle UI Colors</h1>
          <p className="mt-4 text-[18px]">
            Here's a list of all the colors that Miracle UI uses.
          </p>
        </div>
        <div className="flex gap-3 mt-4">
          <Button text="Browse Colors" />
          <Button text="Documentation" />
        </div>
      </section>

      <section id="charts" className="mt-20">
        <div id="colors" className="grid scroll-mt-20 gap-8">
          {Object.keys(colors).map((color, index) => (
            <Slate
              key={index}
              title={colors[color].name}
              colors={colors[color].colors}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
