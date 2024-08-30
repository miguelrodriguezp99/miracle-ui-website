const codeblock = {
  usage: `
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/dropdown";
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  startContent: `
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/dropdown";
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  endContent: `
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/dropdown";
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  positions: `
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/dropdown";
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  iconOnly: `
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@miracle-ui/dropdown";
import { Button } from "@miracle-ui/button";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
};

export default codeblock;
