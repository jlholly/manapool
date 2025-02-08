import type { Meta, StoryObj } from '@storybook/angular';
import { InputOtpComponent } from './input-otp.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputOtpComponent> = {
  component: InputOtpComponent,
  title: 'Input OTP',
};
export default meta;
type Story = StoryObj<InputOtpComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-otp works!/gi)).toBeTruthy();
  },
};
