import ComponentLayout from "../../../layout/ComponentLayout";
import { Avatar, Badge } from "@miracle-ui/react";

export const BadgePage = () => {
  return (
    <ComponentLayout
      title="Badge"
      description="Badges are used as a small numerical value or status descriptor for UI elements."
      examples={[
        {
          title: "Usage",
          component: (
            <Badge isCircular={false} badgeContent="2" bordered>
              <Avatar radius="lg" />
            </Badge>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Circular",
          component: (
            <Badge isCircular={true} badgeContent="2" bordered>
              <Avatar radius="full" />
            </Badge>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Positions",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Badge isCircular={true} badgeContent="2" position="top-left">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" position="top-right">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" position="bottom-left">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" position="bottom-right">
                <Avatar radius="full" />
              </Badge>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Variants",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Badge
                isCircular={true}
                badgeContent="2"
                color="primary"
                variant="faded"
              >
                <Avatar radius="full" />
              </Badge>
              <Badge
                isCircular={true}
                badgeContent="2"
                color="primary"
                variant="flat"
              >
                <Avatar radius="full" />
              </Badge>
              <Badge
                isCircular={true}
                badgeContent="2"
                color="primary"
                variant="solid"
              >
                <Avatar radius="full" />
              </Badge>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Colors",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Badge isCircular={true} badgeContent="2" color="default">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" color="primary">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" color="secondary">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" color="success">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" color="warning">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" color="danger">
                <Avatar radius="full" />
              </Badge>
              <Badge isCircular={true} badgeContent="2" customColor="red">
                <Avatar radius="full" name="custom" />
              </Badge>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
