import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import { NewFileIcon } from "../../../icons/NewFileIcon";
import { CopyLinkIcon } from "../../../icons/CopyLinkIcon";
import { EditFileIcon } from "../../../icons/EditFileIcon";
import { DeleteFileIcon } from "../../../icons/DeleteFileIcon";
import MoonIcon from "../../../icons/MoonIcon";
import codeblock from "./Code";

type DropdownPositions =
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "left-start"
  | "left-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end";

export const DropdownPage = () => {
  const dropdownPositions: DropdownPositions[] = [
    "top",
    "top-start",
    "top-end",
    "left",
    "left-start",
    "left-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "right",
    "right-start",
    "right-end",
  ];
  return (
    <ComponentLayout
      title="Dropdown"
      description="Dropdown is a React component that allows you to create a dropdown menu."
      props="min-h-[400px]"
      storybook="https://main--66685fb204b9df24515e1b9b.chromatic.com/?path=/story/components-dropdown--primary"
      examples={[
        {
          title: "Usage",
          component: (
            <Dropdown>
              <DropdownTrigger>
                <Button radius="md" variant="bordered" color="default">
                  Open Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                position={"bottom"}
                offset={5}
                aria-label="Static Actions"
              >
                <DropdownItem color="success" key="new">
                  New file
                </DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" color="danger">
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
          code: codeblock.usage,
        },
        {
          title: "With Start Content",
          component: (
            <Dropdown>
              <DropdownTrigger>
                <Button radius="md" variant="bordered" color="default">
                  Open Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                position={"bottom"}
                offset={5}
                aria-label="Static Actions"
              >
                <DropdownItem
                  startContent={<NewFileIcon />}
                  color="primary"
                  key="new"
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  startContent={<CopyLinkIcon />}
                  color="default"
                  key="copy"
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  startContent={<EditFileIcon />}
                  color="success"
                  key="edit"
                >
                  Edit file
                </DropdownItem>
                <DropdownItem
                  startContent={<DeleteFileIcon />}
                  key="delete"
                  color="danger"
                  variant="solid"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
          code: codeblock.startContent,
        },
        {
          title: "With End Content",
          component: (
            <Dropdown>
              <DropdownTrigger>
                <Button radius="md" variant="bordered" color="default">
                  Open Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                position={"bottom"}
                offset={5}
                aria-label="Static Actions"
              >
                <DropdownItem
                  endContent={<NewFileIcon />}
                  color="primary"
                  key="new"
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  endContent={<CopyLinkIcon />}
                  color="default"
                  key="copy"
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  endContent={<EditFileIcon />}
                  color="success"
                  key="edit"
                >
                  Edit file
                </DropdownItem>
                <DropdownItem
                  endContent={<DeleteFileIcon />}
                  key="delete"
                  color="danger"
                  variant="solid"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
          code: codeblock.endContent,
        },
        {
          title: "Positions",
          component: (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {dropdownPositions.map((position) => (
                  <Dropdown>
                    <DropdownTrigger>
                      <Button radius="md" variant="bordered" color="default">
                        {position}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      position={position as DropdownPositions}
                      offset={5}
                      aria-label="Static Actions"
                    >
                      <DropdownItem
                        endContent={<NewFileIcon />}
                        color="primary"
                        key="new"
                      >
                        New file
                      </DropdownItem>
                      <DropdownItem
                        endContent={<CopyLinkIcon />}
                        color="default"
                        key="copy"
                      >
                        Copy link
                      </DropdownItem>
                      <DropdownItem
                        endContent={<EditFileIcon />}
                        color="success"
                        key="edit"
                      >
                        Edit file
                      </DropdownItem>
                      <DropdownItem
                        endContent={<DeleteFileIcon />}
                        key="delete"
                        color="danger"
                        variant="solid"
                      >
                        Delete file
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ))}
              </div>
            </>
          ),
          code: codeblock.positions,
        },

        {
          title: "Icon Only",
          component: (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  radius="md"
                  variant="bordered"
                  color="default"
                  isIconOnly
                >
                  <MoonIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                position={"bottom"}
                offset={5}
                aria-label="Static Actions"
              >
                <DropdownItem
                  endContent={<NewFileIcon />}
                  color="primary"
                  key="new"
                >
                  New file
                </DropdownItem>
                <DropdownItem
                  endContent={<CopyLinkIcon />}
                  color="default"
                  key="copy"
                >
                  Copy link
                </DropdownItem>
                <DropdownItem
                  endContent={<EditFileIcon />}
                  color="success"
                  key="edit"
                >
                  Edit file
                </DropdownItem>
                <DropdownItem
                  endContent={<DeleteFileIcon />}
                  key="delete"
                  color="danger"
                  variant="solid"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
          code: codeblock.iconOnly,
        },
      ]}
    />
  );
};
