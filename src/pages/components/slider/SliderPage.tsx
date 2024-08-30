import { Slider } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import { VolumeLowIcon } from "../../../icons/VolumeLowIcon";
import { VolumeHighIcon } from "../../../icons/VolumeHighIcon";
import codeblock from "./Code";

export const SliderPage = () => {
  return (
    <ComponentLayout
      title="Slider"
      description="Slider is used to indicate an undetermined wait period or visually represent the duration of a process."
      customWarning="If you have two or more sliders on the same page, make sure to give them unique names."
      examples={[
        {
          title: "Usage",
          component: <Slider color="primary" name="slider-usage" />,
          code: codeblock.usage,
        },
        {
          title: "Vertical",
          component: <Slider color="secondary" name="slider-vertical" />,
          code: codeblock.vertical,
        },
        {
          title: "With Label",
          component: (
            <Slider color="primary" name="slider-label" label="Volume" />
          ),
          code: codeblock.withLabel,
        },
        {
          title: "With Icons",
          component: (
            <Slider
              color="primary"
              name="slider-icons"
              startContent={<VolumeLowIcon props="h-6 w-6" />}
              endContent={<VolumeHighIcon />}
            />
          ),
          code: codeblock.withIcons,
        },
        {
          title: "With Steps",
          component: (
            <Slider
              color="primary"
              label="Volume"
              name="slider-steps"
              showSteps
              step={20}
            />
          ),
          code: codeblock.withSteps,
        },
        {
          title: "With Steps Icons",
          component: (
            <Slider
              color="primary"
              name="slider-steps-icons"
              startContent={<VolumeLowIcon props="h-6 w-6" />}
              endContent={<VolumeHighIcon />}
              showSteps
              step={20}
            />
          ),
          code: codeblock.withStepsIcons,
        },
        {
          title: "With Steps Icons Vertical",
          component: (
            <Slider
              color="success"
              name="slider-steps-icons"
              direction="vertical"
              startContent={<VolumeLowIcon props="h-6 w-6" />}
              endContent={<VolumeHighIcon />}
              showSteps
              step={20}
            />
          ),
          code: codeblock.withStepsIconsVertical,
        },
        {
          title: "Disabled",
          component: (
            <div className="w-[100%] flex items-start">
              <Slider color="warning" name="slider-disabled" isDisabled />
            </div>
          ),
          code: codeblock.disabled,
        },

        {
          title: "Colors",
          component: (
            <div className="flex flex-col gap-10 w-[100%]">
              <div className="w-[100%] flex items-start">
                <Slider color="default" name="slider-disabled" isDisabled />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="primary" name="slider-primary" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="secondary" name="slider-secondary" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="success" name="slider-success" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="danger" name="slider-info" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="warning" name="slider-warning" />
              </div>
            </div>
          ),
          code: codeblock.colors,
        },
        {
          title: "Sizes",
          component: (
            <div className="flex flex-col gap-10 w-[100%]">
              <div className="w-[100%] flex items-start">
                <Slider color="primary" name="slider-small" size="sm" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="primary" name="slider-medium" size="md" />
              </div>
              <div className="w-[100%] flex items-start">
                <Slider color="primary" name="slider-large" size="lg" />
              </div>
            </div>
          ),
          code: codeblock.sizes,
        },
      ]}
    />
  );
};
