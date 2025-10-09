import { INITIAL_VIEWPORTS } from "storybook/viewport";

const TAILWIND_VIEWPORTS = {
  sm: {
    name: "sm",
    styles: {
      width: "640px",
      height: "inherit",
      type: "other",
    },
  },
  md: {
    name: "md",
    styles: {
      width: "768px",
      height: "inherit",
      type: "other",
    },
  },
  lg: {
    name: "lg",
    styles: {
      width: "1024px",
      height: "inherit",
      type: "other",
    },
  },
  xl: {
    name: "xl",
    styles: {
      width: "1280px",
      height: "inherit",
      type: "other",
    },
  },
};

const requiredDeviceViewports = ["iphone14promax", "ipad11p", "ipad12p"];

const DEVICE_VIEWPORTS = Object.fromEntries(
  Object.entries(INITIAL_VIEWPORTS).filter(([key]) =>
    requiredDeviceViewports.includes(key),
  ),
);

const CUSTOM_VIEWPORTS = {
  ...TAILWIND_VIEWPORTS,
  ...DEVICE_VIEWPORTS,
} as const;

export { CUSTOM_VIEWPORTS };
