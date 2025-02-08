import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PaginationComponent> = {
  component: PaginationComponent,
  title: 'Pagination',
};
export default meta;
type Story = StoryObj<PaginationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pagination works!/gi)).toBeTruthy();
  },
};
