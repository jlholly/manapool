import type { Meta, StoryObj } from '@storybook/angular';
import { AlertDialogComponent } from './alert-dialog.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AlertDialogComponent> = {
  component: AlertDialogComponent,
  title: 'Alert Dialog',
};
export default meta;
type Story = StoryObj<AlertDialogComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/alert-dialog works!/gi)).toBeTruthy();
  },
};
