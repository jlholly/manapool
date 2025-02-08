import type { Meta, StoryObj } from '@storybook/angular';
import { FilterInputComponent } from './filter-input.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FilterInputComponent> = {
  component: FilterInputComponent,
  title: 'Filter Input',
};
export default meta;
type Story = StoryObj<FilterInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/filter-input works!/gi)).toBeTruthy();
  },
};
