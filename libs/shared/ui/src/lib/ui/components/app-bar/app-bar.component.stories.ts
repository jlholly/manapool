import type { Meta, StoryObj } from '@storybook/angular';
import { AppBarComponent } from './app-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppBarComponent> = {
  component: AppBarComponent,
  title: 'App Bar',
};
export default meta;
type Story = StoryObj<AppBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app-bar works!/gi)).toBeTruthy();
  },
};
