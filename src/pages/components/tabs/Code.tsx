const codeblock = {
  usage: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const Demo = () => {
  return (
    <Tabs size={"md"} variant={"solid"} color={"default"}>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  );
};

export default Demo;
`,
  withContent: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const contentStyles = {
  backgroundColor: "#18181b",
  color: "white",
  borderRadius: "10px",
  padding: "0.75rem",
  marginTop: "0.75rem",
  width: "fit-content",
};

const Demo = () => {
  return (
    <div>
      <Tabs size={"md"} variant={"solid"} color={"default"}>
        <Tab title="Photos" key="photos">
          <div style={contentStyles} className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </Tab>
        <Tab title="N.Y" key="videos">
          <div style={contentStyles} className="content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </div>
        </Tab>
        <Tab title="Links" key="links">
          <div style={contentStyles} className="content">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Demo;
`,
  withIcons: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const Demo = () => {
  return (
    <Tabs size={"md"} variant={"solid"} color={"primary"}>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <CameraIcon />
            <span>Photos</span>
          </div>
        }
        key="photos"
      />
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",

              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <VolumeHighIcon />
            <span>Volumes</span>
          </div>
        }
        key="videos"
      />
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <UserIcon />
            <span>Users</span>
          </div>
        }
        key="links"
      />
    </Tabs>
  );
};

export default Demo;
`,
  onlyIcons: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const Demo = () => {
  return (
    <Tabs size={"md"} variant={"solid"} color={"primary"}>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <CameraIcon />
          </div>
        }
        key="photos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",

              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <VolumeHighIcon />
          </div>
        }
        key="videos"
      ></Tab>
      <Tab
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              width: "100%",
              gap: "3px",
            }}
          >
            <UserIcon />
          </div>
        }
        key="links"
      ></Tab>
    </Tabs>
  );
};

export default Demo;
`,
  underlined: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const Demo = () => {
  return (
    <Tabs size={"md"} variant={"underlined"} color={"secondary"}>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  );
};

export default Demo;
`,
  disabled: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const Demo = () => {
  return (
    <Tabs size={"md"} variant={"solid"} color={"default"} isDisabled>
      <Tab title="Photos" key="photos"></Tab>
      <Tab title="N.Y" key="videos"></Tab>
      <Tab title="Links" key="links"></Tab>
    </Tabs>
  );
};

export default Demo;
`,
  vertical: `
import { Tab, Tabs } from "@miracle-ui/tabs";

const contentStylesVertical = {
  backgroundColor: "#18181b",
  color: "white",
  borderRadius: "10px",
  padding: "0.75rem",
};

const Demo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <Tabs
        size={"md"}
        variant={"solid"}
        color={"default"}
        direction="vertical"
      >
        <Tab title="Photos" key="photos">
          <div style={contentStylesVertical} className="content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </div>
        </Tab>
        <Tab title="N.Y" key="videos">
          <div style={contentStylesVertical} className="content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </div>
        </Tab>
        <Tab title="Links" key="links">
          <div style={contentStylesVertical} className="content">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Demo;
`,
};

export default codeblock;
