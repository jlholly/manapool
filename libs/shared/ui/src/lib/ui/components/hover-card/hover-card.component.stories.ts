import type { Meta, StoryObj } from '@storybook/angular';
import { HoverCardComponent } from './hover-card.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HoverCardComponent> = {
  component: HoverCardComponent,
  title: 'Hover Card',
};
export default meta;
type Story = StoryObj<HoverCardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/hover-card works!/gi)).toBeTruthy();
  },
};
