import type { Meta, StoryObj } from '@storybook/angular';
import { AlertBannerComponent } from './alert-banner.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AlertBannerComponent> = {
  component: AlertBannerComponent,
  title: 'Alert Banner',
};
export default meta;
type Story = StoryObj<AlertBannerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/alert-banner works!/gi)).toBeTruthy();
  },
};
