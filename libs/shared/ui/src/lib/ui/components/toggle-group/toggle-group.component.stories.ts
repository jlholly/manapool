import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleGroupComponent } from './toggle-group.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToggleGroupComponent> = {
  component: ToggleGroupComponent,
  title: 'Toggle Group',
};
export default meta;
type Story = StoryObj<ToggleGroupComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toggle-group works!/gi)).toBeTruthy();
  },
};
