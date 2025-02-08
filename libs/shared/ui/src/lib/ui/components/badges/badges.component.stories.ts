import type { Meta, StoryObj } from '@storybook/angular';
import { BadgesComponent } from './badges.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BadgesComponent> = {
  component: BadgesComponent,
  title: 'Badges',
};
export default meta;
type Story = StoryObj<BadgesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/badges works!/gi)).toBeTruthy();
  },
};
