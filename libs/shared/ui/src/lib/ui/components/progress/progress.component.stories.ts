import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProgressComponent> = {
  component: ProgressComponent,
  title: 'Progress',
};
export default meta;
type Story = StoryObj<ProgressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/progress works!/gi)).toBeTruthy();
  },
};
