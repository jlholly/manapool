import type { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LabelComponent> = {
  component: LabelComponent,
  title: 'Label',
};
export default meta;
type Story = StoryObj<LabelComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/label works!/gi)).toBeTruthy();
  },
};
