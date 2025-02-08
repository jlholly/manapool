import type { Meta, StoryObj } from '@storybook/angular';
import { ContextMenuComponent } from './context-menu.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ContextMenuComponent> = {
  component: ContextMenuComponent,
  title: 'Context Menu',
};
export default meta;
type Story = StoryObj<ContextMenuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/context-menu works!/gi)).toBeTruthy();
  },
};
