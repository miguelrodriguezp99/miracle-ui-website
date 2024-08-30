const codeblock = {
  usage: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";


const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  backdropBlur: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";


const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  backdropTransparent: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";


const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  customBackgroundColor: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";


const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  sizes: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";

const modalSizes: ModalSizes[] = ["xs","sm","md","lg","xl","xl3","xl4","xl5","full"];

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  placements: `
import { Modal } from "@miracle-ui/modal";
import { Button } from "@miracle-ui/button";

const modalPlacements: ModalPlacements[] = ["auto","top","bottom","center","topCenter","bottomCenter"];

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
};

export default codeblock;
