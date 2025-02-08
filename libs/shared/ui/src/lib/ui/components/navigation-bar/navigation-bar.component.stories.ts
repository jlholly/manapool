import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationBarComponent } from './navigation-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavigationBarComponent> = {
  component: NavigationBarComponent,
  title: 'Navigation Bar',
};
export default meta;
type Story = StoryObj<NavigationBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/navigation-bar works!/gi)).toBeTruthy();
  },
};
