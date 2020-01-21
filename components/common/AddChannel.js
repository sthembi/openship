import React, { useState } from "react";
import {
  Pane,
  Tab,
  Tablist,
  Heading,
  TextInputField,
  Button
} from "evergreen-ui";

const option = (name, options, update, selected) => (
  <Pane marginBottom={10} marginRight={10}>
    <Heading size={500} fontSize="12px" fontWeight={500} marginBottom={2}>
      {name}
    </Heading>
    <Tablist>
      {options.map((a, index) => (
        <Tab
          key={a}
          id={a}
          marginLeft={0}
          height="20px"
          fontSize="10px"
          marginBottom={3}
          letterSpacing="0.3px"
          fontWeight={400}
          textTransform="uppercase"
          onSelect={() => update(a)}
          isSelected={a === selected}
          aria-controls={`panel-${a}`}
        >
          {a}
        </Tab>
      ))}
    </Tablist>
  </Pane>
);

const AddChannel = () => {
  const [type, setType] = useState("Zinc");

  return (
    <Pane
      width={300}
      display="flex"
      alignItems="left"
      justifyContent="center"
      flexDirection="column"
      padding={15}
    >
      <form method="GET" action="/shopify/auth" style={{ width: "100%" }}>
        {option("Type", ["zinc", "marketplace"], a => setType(a), type)}
        <TextInputField
          label="Shop URL"
          marginBottom="10px"
          hint="Must end in .myshopify.com"
          id="shop"
          name="shop"
        />

        <Button
          width="100%"
          justifyContent="center"
          appearance="primary"
          intent="success"
          fontSize="12px"
          paddingY={3}
        >
          Add Channel
        </Button>
      </form>
    </Pane>
  );
};

export default AddChannel;
