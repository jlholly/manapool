import type { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EmptyStateComponent> = {
  component: EmptyStateComponent,
  title: 'Empty State',
};
export default meta;
type Story = StoryObj<EmptyStateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/empty-state works!/gi)).toBeTruthy();
  },
};
