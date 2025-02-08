import type { Meta, StoryObj } from '@storybook/angular';
import { ScrollAreaComponent } from './scroll-area.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ScrollAreaComponent> = {
  component: ScrollAreaComponent,
  title: 'Scroll Area',
};
export default meta;
type Story = StoryObj<ScrollAreaComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/scroll-area works!/gi)).toBeTruthy();
  },
};
