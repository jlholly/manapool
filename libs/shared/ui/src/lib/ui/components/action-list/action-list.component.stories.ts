import type { Meta, StoryObj } from '@storybook/angular';
import { ActionListComponent } from './action-list.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ActionListComponent> = {
  component: ActionListComponent,
  title: 'Action List',
};
export default meta;
type Story = StoryObj<ActionListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/action-list works!/gi)).toBeTruthy();
  },
};
