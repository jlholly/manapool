import type { Meta, StoryObj } from '@storybook/angular';
import { DataTableComponent } from './data-table.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DataTableComponent> = {
  component: DataTableComponent,
  title: 'Data Table',
};
export default meta;
type Story = StoryObj<DataTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/data-table works!/gi)).toBeTruthy();
  },
};
