import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReactInternetInfo from "./ReactInternetInfo";

export default {
  title: "ReactComponentLibrary/ReactInternetInfo",
  component: ReactInternetInfo,
} as ComponentMeta<typeof ReactInternetInfo>;

const Template: ComponentStory<typeof ReactInternetInfo> = (args) => (
  <ReactInternetInfo {...args} />
);

export const ReactInternetInfoDemo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReactInternetInfoDemo.args = {
  message: "You are offline",
};
