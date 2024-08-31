import { Card } from "@miracle-ui/card";
import ComponentLayout from "../../../layout/ComponentLayout";
import { Skeleton } from "@miracle-ui/react";
import codeblock from "./Code";

export const SkeletonPage = () => {
  return (
    <ComponentLayout
      title="Clipboard"
      description="Clipboard is a React component that allows you to copy text to the clipboard."
      storybook="https://main--66685fb204b9df24515e1b9b.chromatic.com/?path=/story/components-skeleton--default"
      examples={[
        {
          title: "Usage",
          component: (
            <Card cardWidth="sm" padding="md" customColor="#18181b">
              <Skeleton borderRadius="10px">
                <div
                  style={{
                    width: "100%",
                    height: "75px",
                    backgroundColor: "#27272a",
                    borderRadius: "10px",
                  }}
                />
              </Skeleton>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Skeleton borderRadius="10px" customWidth>
                  <div
                    style={{
                      width: "120px",
                      height: "12px",
                      backgroundColor: "#27272a",
                      borderRadius: "10px",
                    }}
                  />
                </Skeleton>

                <Skeleton borderRadius="10px" customWidth>
                  <div
                    style={{
                      width: "140px",
                      height: "12px",
                      backgroundColor: "#27272a",
                      borderRadius: "10px",
                    }}
                  />
                </Skeleton>
                <Skeleton borderRadius="10px" customWidth>
                  <div
                    style={{
                      width: "80px",
                      height: "12px",
                      backgroundColor: "#27272a",
                      borderRadius: "10px",
                    }}
                  />
                </Skeleton>
              </div>
            </Card>
          ),
          code: codeblock.usage,
        },
        {
          title: "Secondary",
          component: (
            <Card cardWidth="xl" padding="md" customColor="#18181b">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                }}
              >
                <Skeleton borderRadius="9999px" customWidth>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#27272a",
                      borderRadius: "9999px",
                    }}
                  />
                </Skeleton>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <Skeleton borderRadius="9999px" customWidth>
                    <div
                      style={{
                        width: "160px",
                        height: "10px",
                        backgroundColor: "#27272a",
                        borderRadius: "9999px",
                      }}
                    />
                  </Skeleton>
                  <Skeleton borderRadius="9999px" customWidth>
                    <div
                      style={{
                        width: "200px",
                        height: "10px",
                        backgroundColor: "#27272a",
                        borderRadius: "9999px",
                      }}
                    />
                  </Skeleton>
                </div>
              </div>
            </Card>
          ),
          code: codeblock.secondary,
        },
      ]}
    />
  );
};
