import ComponentLayout from "../../../layout/ComponentLayout";
import { Resizer } from "@miracle-ui/react";

export const ResizerPage = () => {
  return (
    <ComponentLayout
      title="Reizer"
      description="Resizer is a component that allows you to resize the panes in a container."
      examples={[
        {
          title: "Usage",
          component: (
            <div
              className="resizer-container"
              style={{
                display: "grid",
                placeItems: "center",
                minHeight: "200px",
                minWidth: "400px",
                backgroundColor: "transparent",
                borderRadius: "5px",
                //border: "1px solid #333",
              }}
            >
              <Resizer resizeBarSize={1} defaultSize="60%">
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  Pane 1
                </div>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  Pane 2
                </div>
              </Resizer>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },

        {
          title: "Vertical",
          component: (
            <div
              className="resizer-container"
              style={{
                display: "grid",
                placeItems: "center",
                minHeight: "200px",
                minWidth: "400px",
                backgroundColor: "transparent",
                borderRadius: "5px",
                //border: "1px solid #333",
              }}
            >
              <Resizer direction="vertical" resizeBarSize={1} defaultSize="50%">
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  Pane 1
                </div>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  Pane 2
                </div>
              </Resizer>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
        {
          title: "Custom",
          component: (
            <div
              className="resizer-container"
              style={{
                display: "grid",
                placeItems: "center",
                minHeight: "200px",
                minWidth: "400px",
                backgroundColor: "transparent",
                borderRadius: "5px",
                //border: "1px solid #333",
              }}
            >
              <Resizer resizeBarSize={1} defaultSize="20%">
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    height: "100%",
                  }}
                >
                  Pane 1
                </div>

                <Resizer direction="vertical" resizeBarSize={1}>
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      height: "100%",
                    }}
                  >
                    Pane 1
                  </div>
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      height: "100%",
                    }}
                  >
                    Pane 2
                  </div>
                </Resizer>
              </Resizer>
            </div>
          ),
          code: `<button>Checkbox</button>`,
        },
      ]}
    />
  );
};
