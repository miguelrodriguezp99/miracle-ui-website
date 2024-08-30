const codeblock = {
  usage: `
import { Skeleton } from "@miracle-ui/skeleton";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
  secondary: `
import { Skeleton } from "@miracle-ui/skeleton";

const Demo = () => {
  return (
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
  );
};

export default Demo;
`,
};

export default codeblock;
