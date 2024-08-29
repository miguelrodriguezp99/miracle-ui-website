import { Switch } from "@miracle-ui/react";
import MoonIcon2 from "../../../icons/MoonIcon2";
import SunIcon from "../../../icons/SunIcon";
import ComponentLayout from "../../../layout/ComponentLayout";

export const SwitchPage = () => {
  // Estados independientes para cada Switch

  return (
    <ComponentLayout
      title="Switch"
      description="A Switch is a component that allows the user to toggle between two states."
      customWarning="If you want to use multiple switches, you need to add a unique id to each one."
      examples={[
        {
          title: "Usage",
          component: <Switch id="check" />,
          code: `<Switch value={checked1} setValue={setChecked1} />`,
        },
        {
          title: "Disabled",
          component: <Switch isDisabled id="check2" />,
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "Default Selected",
          component: <Switch defaultSelected id="check3" />,
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "Custom Thumb Icon",
          component: (
            <Switch
              thumbIcon={({ isChecked }) =>
                isChecked ? <SunIcon /> : <MoonIcon2 />
              }
              id="check4"
            />
          ),
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "Start and End Content",
          component: (
            <Switch
              startContent={<SunIcon />}
              endContent={<MoonIcon2 />}
              id="check5"
            />
          ),
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "With Label",
          component: <Switch id="check6">Dark Mode</Switch>,
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "With Custom Label",
          component: (
            <Switch
              id="check7"
              labelFontSize="20px"
              labelColor={"purple"}
              customBackgroundColor={"#E073F9"}
              customCheckedColor={"#6C237D"}
              customThumbColor={"black"}
              startContent={<SunIcon />}
              endContent={<MoonIcon2 />}
            >
              Dark Mode
            </Switch>
          ),
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "Custom",
          component: (
            <Switch
              id="check8"
              labelColor={"purple"}
              customBackgroundColor={"lightgreen"}
              customCheckedColor={"#F85D5D"}
              customThumbColor={"black"}
            />
          ),
          code: `<Switch value={checked2} setValue={setChecked2} />`,
        },
        {
          title: "Sizes",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Switch id="check9" size="sm" />
              <Switch id="check10" size="md" />
              <Switch id="check11" size="lg" />
            </div>
          ),
          code: `<Switch value={checked1} setValue={setChecked1} />`,
        },
      ]}
    />
  );
};
