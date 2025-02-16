import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: 'Icon',
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/icon works!/gi)).toBeTruthy();
  },
};
