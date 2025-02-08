import type { Meta, StoryObj } from '@storybook/angular';
import { PopoverComponent } from './popover.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PopoverComponent> = {
  component: PopoverComponent,
  title: 'Popover',
};
export default meta;
type Story = StoryObj<PopoverComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/popover works!/gi)).toBeTruthy();
  },
};
