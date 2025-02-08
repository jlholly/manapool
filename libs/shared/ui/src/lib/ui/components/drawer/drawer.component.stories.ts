import type { Meta, StoryObj } from '@storybook/angular';
import { DrawerComponent } from './drawer.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DrawerComponent> = {
  component: DrawerComponent,
  title: 'Drawer',
};
export default meta;
type Story = StoryObj<DrawerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/drawer works!/gi)).toBeTruthy();
  },
};
