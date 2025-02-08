import type { Meta, StoryObj } from '@storybook/angular';
import { LogoComponent } from './logo.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LogoComponent> = {
  component: LogoComponent,
  title: 'Logo',
};
export default meta;
type Story = StoryObj<LogoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/logo works!/gi)).toBeTruthy();
  },
};
