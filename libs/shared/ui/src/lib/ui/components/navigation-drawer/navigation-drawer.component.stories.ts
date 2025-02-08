import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationDrawerComponent } from './navigation-drawer.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavigationDrawerComponent> = {
  component: NavigationDrawerComponent,
  title: 'Navigation Drawer',
};
export default meta;
type Story = StoryObj<NavigationDrawerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/navigation-drawer works!/gi)).toBeTruthy();
  },
};
