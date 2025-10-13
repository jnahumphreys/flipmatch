import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Card } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imagePath: {
      control: false,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    onLoad: fn(),
    onTransitionEnd: fn(),
    flipped: true,
    label: "Bumble Bee",
    imagePath: "/images/bumble_bee.png",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
