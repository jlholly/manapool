import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToastComponent> = {
  component: ToastComponent,
  title: 'Toast',
};
export default meta;
type Story = StoryObj<ToastComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toast works!/gi)).toBeTruthy();
  },
};
