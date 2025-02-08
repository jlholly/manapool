import type { Meta, StoryObj } from '@storybook/angular';
import { SheetComponent } from './sheet.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SheetComponent> = {
  component: SheetComponent,
  title: 'Sheet',
};
export default meta;
type Story = StoryObj<SheetComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sheet works!/gi)).toBeTruthy();
  },
};
