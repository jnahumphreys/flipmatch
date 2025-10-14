import type { Meta, StoryObj } from "@storybook/react-vite";
// import { fn } from "storybook/test";

import { Stage } from "./stage";

const meta = {
  title: "Components/Stage",
  component: Stage,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {},
};
