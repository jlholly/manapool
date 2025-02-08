import type { Meta, StoryObj } from '@storybook/angular';
import { ResizableComponent } from './resizable.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ResizableComponent> = {
  component: ResizableComponent,
  title: 'Resizable',
};
export default meta;
type Story = StoryObj<ResizableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/resizable works!/gi)).toBeTruthy();
  },
};
