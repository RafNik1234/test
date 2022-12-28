import { Btn } from "../components/Btn";

export default {
  component: Btn,
  title: "Btn",
};

const Template = args => <Btn {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};