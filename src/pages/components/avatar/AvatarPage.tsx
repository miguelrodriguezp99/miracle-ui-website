import ComponentLayout from "../../../layout/ComponentLayout";
import { Avatar, AvatarGroup } from "@miracle-ui/react";
import codeblock from "./Code";

export const AvatarPage = () => {
  return (
    <ComponentLayout
      title="Avatar"
      description="The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon."
      examples={[
        {
          title: "Usage",
          component: <Avatar />,
          code: codeblock.usage,
        },
        {
          title: "With Text",
          component: <Avatar name="John Doe" />,
          code: codeblock.withLabel,
        },
        {
          title: "With Image",
          component: (
            <Avatar avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          ),
          code: codeblock.withImage,
        },
        {
          title: "With Border",
          component: (
            <Avatar
              bordered
              avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ),
          code: codeblock.bordered,
        },
        {
          title: "Disabled",
          component: (
            <Avatar
              isDisabled
              avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ),
          code: codeblock.disabled,
        },
        {
          title: "Group Horizontal",
          component: (
            <AvatarGroup animation="horizontal">
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </AvatarGroup>
          ),
          code: codeblock.groupHorizontal,
        },
        {
          title: "Group Vertical",
          component: (
            <AvatarGroup animation="vertical">
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </AvatarGroup>
          ),
          code: codeblock.groupVertical,
        },
        {
          title: "Group Disabled",
          component: (
            <AvatarGroup animation="vertical" isDisabled>
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Avatar
                bordered
                avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </AvatarGroup>
          ),
          code: codeblock.groupDisabled,
        },
        {
          title: "Sizes",
          component: (
            <div className="flex flex-row flex-wrap gap-16 items-center">
              <Avatar size="sm" name="Small" bordered />
              <Avatar size="md" name="Medium" bordered />
              <Avatar size="lg" name="Large" bordered />
            </div>
          ),
          code: codeblock.sizes,
        },
        {
          title: "Colors",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Avatar size="md" name="John Doe" color="default" />
              <Avatar size="md" name="John Doe" color="primary" />
              <Avatar size="md" name="John Doe" color="secondary" />
              <Avatar size="md" name="John Doe" color="success" />
              <Avatar size="md" name="John Doe" color="warning" />
              <Avatar size="md" name="John Doe" color="danger" />
            </div>
          ),
          code: codeblock.colors,
        },
        {
          title: "Radius",
          component: (
            <div className="flex flex-row flex-wrap gap-10 items-center">
              <Avatar size="md" name="None" radius="none" />
              <Avatar size="md" name="Sm" radius="sm" />
              <Avatar size="md" name="Md" radius="md" />
              <Avatar size="md" name="Lg" radius="lg" />
              <Avatar size="md" name="Xl" radius="xl" />
              <Avatar size="md" name="Full" radius="full" />
            </div>
          ),
          code: codeblock.radius,
        },
      ]}
    />
  );
};
