import type { Meta, StoryObj } from '@storybook/angular';
import { CommandMenuComponent } from './command-menu.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CommandMenuComponent> = {
  component: CommandMenuComponent,
  title: 'Command Menu',
};
export default meta;
type Story = StoryObj<CommandMenuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/command-menu works!/gi)).toBeTruthy();
  },
};
