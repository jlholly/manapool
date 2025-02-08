import type { Meta, StoryObj } from '@storybook/angular';
import { ActionButtonComponent } from './action-button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ActionButtonComponent> = {
  component: ActionButtonComponent,
  title: 'Action Button',
};
export default meta;
type Story = StoryObj<ActionButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/action-button works!/gi)).toBeTruthy();
  },
};
