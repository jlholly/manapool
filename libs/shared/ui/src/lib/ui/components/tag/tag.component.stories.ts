import type { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TagComponent> = {
  component: TagComponent,
  title: 'Tag',
};
export default meta;
type Story = StoryObj<TagComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tag works!/gi)).toBeTruthy();
  },
};
