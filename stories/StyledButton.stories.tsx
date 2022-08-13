import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import MDXDocument from "./StyledButton.mdx";

export default {
  title: "StyledButton",
  component: StyledButton,
  argTypes: {
    //propsに渡すものを定義する
    variant: {
      control: { type: "radio" },
      options: ["primary", "success", "transparent"],
    },
    children: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const TemplateTest = Template.bind({});

TemplateTest.args = {
  variant: "primary",
  children: "primary",
};
