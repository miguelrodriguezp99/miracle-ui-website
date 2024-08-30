const codeblock = {
  usage: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider color="primary" name="slider-usage" />
  );
};

export default Demo;
`,
  vertical: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider color="secondary" name="slider-vertical" />
  );
};

export default Demo;
`,
  withLabel: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider color="primary" name="slider-label" label="Volume" />
  );
};

export default Demo;
`,
  withIcons: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider
      color="primary"
      name="slider-icons"
      startContent={<VolumeLowIcon props="h-6 w-6" />}
      endContent={<VolumeHighIcon />}
    />
  );
};

export default Demo;
`,
  withSteps: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider
      color="primary"
      label="Volume"
      name="slider-steps"
      showSteps
      step={20}
    />
  );
};

export default Demo;
`,
  withStepsIcons: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider
      color="primary"
      name="slider-steps-icons"
      startContent={<VolumeLowIcon props="h-6 w-6" />}
      endContent={<VolumeHighIcon />}
      showSteps
      step={20}
    />
  );
};

export default Demo;
`,
  withStepsIconsVertical: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider
      color="success"
      name="slider-steps-icons"
      direction="vertical"
      startContent={<VolumeLowIcon props="h-6 w-6" />}
      endContent={<VolumeHighIcon />}
      showSteps
      step={20}
    />
  );
};

export default Demo;
`,
  disabled: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
    <Slider color="warning" name="slider-disabled" isDisabled />
  );
};

export default Demo;
`,
  colors: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  sizes: `
import { Slider } from "@miracle-ui/slider";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
};

export default codeblock;
