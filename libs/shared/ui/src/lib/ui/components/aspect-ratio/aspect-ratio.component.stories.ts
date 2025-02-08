import type { Meta, StoryObj } from '@storybook/angular';
import { AspectRatioComponent } from './aspect-ratio.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AspectRatioComponent> = {
  component: AspectRatioComponent,
  title: 'Aspect Ratio',
};
export default meta;
type Story = StoryObj<AspectRatioComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/aspect-ratio works!/gi)).toBeTruthy();
  },
};
