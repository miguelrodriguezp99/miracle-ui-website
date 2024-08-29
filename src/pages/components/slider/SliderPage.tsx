import { Slider } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import { VolumeLowIcon } from "../../../icons/VolumeLowIcon";
import { VolumeHighIcon } from "../../../icons/VolumeHighIcon";

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
          code: `todoIt`,
        },
        {
          title: "Vertical",
          component: (
            <div>
              <Slider color="secondary" name="slider-vertical" />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "With Label",
          component: (
            <div>
              <Slider color="primary" name="slider-label" label="Volume" />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "With Icons",
          component: (
            <div>
              <Slider
                color="primary"
                name="slider-icons"
                startContent={<VolumeLowIcon props="h-6 w-6" />}
                endContent={<VolumeHighIcon />}
              />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "With Steps",
          component: (
            <div>
              <Slider
                color="primary"
                label="Volume"
                name="slider-steps"
                showSteps
                step={20}
              />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "With Steps Icons",
          component: (
            <div>
              <Slider
                color="primary"
                name="slider-steps-icons"
                startContent={<VolumeLowIcon props="h-6 w-6" />}
                endContent={<VolumeHighIcon />}
                showSteps
                step={20}
              />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "With Steps Icons Vertical",
          component: (
            <div>
              <Slider
                color="success"
                name="slider-steps-icons"
                direction="vertical"
                startContent={<VolumeLowIcon props="h-6 w-6" />}
                endContent={<VolumeHighIcon />}
                showSteps
                step={20}
              />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "Disabled",
          component: (
            <div>
              <Slider color="warning" name="slider-disabled" isDisabled />
            </div>
          ),
          code: `todoIt`,
        },

        {
          title: "Colors",
          component: (
            <div className="grid grid-cols-1 gap-10">
              <Slider color="default" name="slider-default" />
              <Slider color="primary" name="slider-primary" />
              <Slider color="secondary" name="slider-secondary" />
              <Slider color="success" name="slider-success" />
              <Slider color="warning" name="slider-warning" />
              <Slider color="danger" name="slider-danger" />
            </div>
          ),
          code: `todoIt`,
        },
        {
          title: "Sizes",
          component: (
            <div className="grid grid-cols-1 gap-10">
              <Slider color="primary" name="slider-small" size="sm" />
              <Slider color="primary" name="slider-medium" size="md" />
              <Slider color="primary" name="slider-large" size="lg" />
            </div>
          ),
          code: `todoIt`,
        },
      ]}
    />
  );
};
