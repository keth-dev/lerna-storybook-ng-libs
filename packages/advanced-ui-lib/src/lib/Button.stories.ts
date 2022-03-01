// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {AdvancedButton} from './AdvancedButton';
import {moduleMetadata} from "@storybook/angular";
import {UiLibModule} from '@keth/base-ui-lib';
import {CommonModule} from "@angular/common";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/AdvancedButton',
  component: AdvancedButton,
  decorators: [
    moduleMetadata({
      declarations: [AdvancedButton],
      imports: [CommonModule, UiLibModule]
    })
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AdvancedButton> = (args: AdvancedButton) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
