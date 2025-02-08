import type { Meta, StoryObj } from '@storybook/angular';
import { InlineMessageComponent } from './inline-message.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InlineMessageComponent> = {
  component: InlineMessageComponent,
  title: 'Inline Message',
};
export default meta;
type Story = StoryObj<InlineMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/inline-message works!/gi)).toBeTruthy();
  },
};
