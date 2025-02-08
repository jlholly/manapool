import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonGroupComponent> = {
  component: ButtonGroupComponent,
  title: 'Button Group',
};
export default meta;
type Story = StoryObj<ButtonGroupComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-group works!/gi)).toBeTruthy();
  },
};
