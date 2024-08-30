import { Button, Modal } from "@miracle-ui/react";
import ComponentLayout from "../../../layout/ComponentLayout";
import codeblock from "./Code";

type ModalSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xl3"
  | "xl4"
  | "xl5"
  | "full";

type ModalPlacements =
  | "auto"
  | "top"
  | "bottom"
  | "center"
  | "topCenter"
  | "bottomCenter";

export const ModalPage = () => {
  const modalSizes: ModalSizes[] = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xl3",
    "xl4",
    "xl5",
    "full",
  ];

  const modalPlacements: ModalPlacements[] = [
    "auto",
    "top",
    "bottom",
    "center",
    "topCenter",
    "bottomCenter",
  ];

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "10px",
  };
  return (
    <ComponentLayout
      title="Modal"
      description="Modal is a dialog box or popup, displayed over the current page."
      examples={[
        {
          title: "Usage",
          component: (
            <Modal
              button={
                <Button radius="md" color="default" variant="bordered">
                  Open Modal
                </Button>
              }
            >
              {({ closeModal }) => (
                <div>
                  <div className="flex flex-col gap-1 text-2xl">
                    Modal Title
                  </div>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium, blanditiis ullam, explicabo voluptatem
                    excepturi corporis labore dignissimos quibusdam dolore
                    incidunt exercitationem at sed ab autem sapiente dolorum
                    magnam mollitia aperiam fugiat minus, placeat nisi. A,
                    pariatur neque, culpa iste molestiae, laborum omnis possimus
                    ipsam nesciunt officiis assumenda provident consequuntur?
                    Modi magni ducimus culpa veniam porro assumenda esse hic
                    alias beatae, obcaecati quaerat laborum mollitia similique
                    numquam nihil soluta error aliquid repellendus animi omnis,
                    molestias, quisquam libero sed nisi? Temporibus eveniet
                    earum eum quam iste laborum exercitationem totam autem
                    sapiente, commodi praesentium consectetur nemo corrupti
                    nesciunt aliquam laboriosam sequi nostrum possimus!
                  </p>
                  <div style={buttonContainerStyle}>
                    <Button onClick={closeModal} radius="sm" customColor="red">
                      Close
                    </Button>
                    <Button radius="sm">Action</Button>
                  </div>
                </div>
              )}
            </Modal>
          ),
          code: codeblock.usage,
        },
        {
          title: "Backdrop Blur",
          component: (
            <Modal
              backdrop="blur"
              button={
                <Button radius="md" color="default" variant="bordered">
                  Open Modal
                </Button>
              }
            >
              {({ closeModal }) => (
                <div>
                  <div className="flex flex-col gap-1 text-2xl">
                    Modal Title
                  </div>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium, blanditiis ullam, explicabo voluptatem
                    excepturi corporis labore dignissimos quibusdam dolore
                    incidunt exercitationem at sed ab autem sapiente dolorum
                    magnam mollitia aperiam fugiat minus, placeat nisi. A,
                    pariatur neque, culpa iste molestiae, laborum omnis possimus
                    ipsam nesciunt officiis assumenda provident consequuntur?
                    Modi magni ducimus culpa veniam porro assumenda esse hic
                    alias beatae, obcaecati quaerat laborum mollitia similique
                    numquam nihil soluta error aliquid repellendus animi omnis,
                    molestias, quisquam libero sed nisi? Temporibus eveniet
                    earum eum quam iste laborum exercitationem totam autem
                    sapiente, commodi praesentium consectetur nemo corrupti
                    nesciunt aliquam laboriosam sequi nostrum possimus!
                  </p>
                  <div style={buttonContainerStyle}>
                    <Button onClick={closeModal} radius="sm" customColor="red">
                      Close
                    </Button>
                    <Button radius="sm">Action</Button>
                  </div>
                </div>
              )}
            </Modal>
          ),
          code: codeblock.backdropBlur,
        },
        {
          title: "Backdrop Transparent",
          component: (
            <Modal
              backdrop="transparent"
              button={
                <Button radius="md" color="default" variant="bordered">
                  Open Modal
                </Button>
              }
            >
              {({ closeModal }) => (
                <div>
                  <div className="flex flex-col gap-1 text-2xl">
                    Modal Title
                  </div>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium, blanditiis ullam, explicabo voluptatem
                    excepturi corporis labore dignissimos quibusdam dolore
                    incidunt exercitationem at sed ab autem sapiente dolorum
                    magnam mollitia aperiam fugiat minus, placeat nisi. A,
                    pariatur neque, culpa iste molestiae, laborum omnis possimus
                    ipsam nesciunt officiis assumenda provident consequuntur?
                    Modi magni ducimus culpa veniam porro assumenda esse hic
                    alias beatae, obcaecati quaerat laborum mollitia similique
                    numquam nihil soluta error aliquid repellendus animi omnis,
                    molestias, quisquam libero sed nisi? Temporibus eveniet
                    earum eum quam iste laborum exercitationem totam autem
                    sapiente, commodi praesentium consectetur nemo corrupti
                    nesciunt aliquam laboriosam sequi nostrum possimus!
                  </p>
                  <div style={buttonContainerStyle}>
                    <Button onClick={closeModal} radius="sm" customColor="red">
                      Close
                    </Button>
                    <Button radius="sm">Action</Button>
                  </div>
                </div>
              )}
            </Modal>
          ),
          code: codeblock.backdropTransparent,
        },
        {
          title: "Custom Background Color",
          component: (
            <Modal
              backgroundColor="#3C3C3C90"
              button={
                <Button radius="md" color="default" variant="bordered">
                  Open Modal
                </Button>
              }
            >
              {({ closeModal }) => (
                <div>
                  <div className="flex flex-col gap-1 text-2xl">
                    Modal Title
                  </div>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium, blanditiis ullam, explicabo voluptatem
                    excepturi corporis labore dignissimos quibusdam dolore
                    incidunt exercitationem at sed ab autem sapiente dolorum
                    magnam mollitia aperiam fugiat minus, placeat nisi. A,
                    pariatur neque, culpa iste molestiae, laborum omnis possimus
                    ipsam nesciunt officiis assumenda provident consequuntur?
                    Modi magni ducimus culpa veniam porro assumenda esse hic
                    alias beatae, obcaecati quaerat laborum mollitia similique
                    numquam nihil soluta error aliquid repellendus animi omnis,
                    molestias, quisquam libero sed nisi? Temporibus eveniet
                    earum eum quam iste laborum exercitationem totam autem
                    sapiente, commodi praesentium consectetur nemo corrupti
                    nesciunt aliquam laboriosam sequi nostrum possimus!
                  </p>
                  <div style={buttonContainerStyle}>
                    <Button onClick={closeModal} radius="sm" customColor="red">
                      Close
                    </Button>
                    <Button radius="sm">Action</Button>
                  </div>
                </div>
              )}
            </Modal>
          ),
          code: codeblock.customBackgroundColor,
        },
        {
          title: "Sizes",
          component: (
            <div className="flex flex-wrap gap-10">
              {modalSizes.map((size) => (
                <Modal
                  size={size}
                  backdrop="opaque"
                  button={
                    <Button radius="md" color="default" variant="bordered">
                      {size}
                    </Button>
                  }
                >
                  {({ closeModal }) => (
                    <div>
                      <div className="flex flex-col gap-1 text-2xl">
                        Modal Title
                      </div>
                      <p className="py-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium, blanditiis ullam, explicabo
                        voluptatem excepturi corporis labore dignissimos
                        quibusdam dolore incidunt exercitationem at sed ab autem
                        sapiente dolorum magnam mollitia aperiam fugiat minus,
                        placeat nisi. A, pariatur neque, culpa iste molestiae,
                        laborum omnis possimus ipsam nesciunt officiis assumenda
                        provident consequuntur? Modi magni ducimus culpa veniam
                        porro assumenda esse hic alias beatae, obcaecati quaerat
                        laborum mollitia similique numquam nihil soluta error
                        aliquid repellendus animi omnis, molestias, quisquam
                        libero sed nisi? Temporibus eveniet earum eum quam iste
                        laborum exercitationem totam autem sapiente, commodi
                        praesentium consectetur nemo corrupti nesciunt aliquam
                        laboriosam sequi nostrum possimus!
                      </p>
                      <div style={buttonContainerStyle}>
                        <Button
                          onClick={closeModal}
                          radius="sm"
                          customColor="red"
                        >
                          Close
                        </Button>
                        <Button radius="sm">Action</Button>
                      </div>
                    </div>
                  )}
                </Modal>
              ))}
            </div>
          ),
          code: codeblock.sizes,
        },
        {
          title: "Placements",
          component: (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {modalPlacements.map((placement) => (
                <Modal
                  placement={placement}
                  backdrop="opaque"
                  button={
                    <Button radius="md" color="default" variant="bordered">
                      {placement}
                    </Button>
                  }
                >
                  {({ closeModal }) => (
                    <div>
                      <div className="flex flex-col gap-1 text-2xl">
                        Modal Title
                      </div>
                      <p className="py-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium, blanditiis ullam, explicabo
                        voluptatem excepturi corporis labore dignissimos
                        quibusdam dolore incidunt exercitationem at sed ab autem
                        sapiente dolorum magnam mollitia aperiam fugiat minus,
                        placeat nisi. A, pariatur neque, culpa iste molestiae,
                        laborum omnis possimus ipsam nesciunt officiis assumenda
                        provident consequuntur? Modi magni ducimus culpa veniam
                        porro assumenda esse hic alias beatae, obcaecati quaerat
                        laborum mollitia similique numquam nihil soluta error
                        aliquid repellendus animi omnis, molestias, quisquam
                        libero sed nisi? Temporibus eveniet earum eum quam iste
                        laborum exercitationem totam autem sapiente, commodi
                        praesentium consectetur nemo corrupti nesciunt aliquam
                        laboriosam sequi nostrum possimus!
                      </p>
                      <div style={buttonContainerStyle}>
                        <Button
                          onClick={closeModal}
                          radius="sm"
                          customColor="red"
                        >
                          Close
                        </Button>
                        <Button radius="sm">Action</Button>
                      </div>
                    </div>
                  )}
                </Modal>
              ))}
            </div>
          ),
          code: codeblock.placements,
        },
      ]}
    />
  );
};
