import type { Meta, StoryObj } from '@storybook/angular';
import { MenusComponent } from './menus.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenusComponent> = {
  component: MenusComponent,
  title: 'Menus',
};
export default meta;
type Story = StoryObj<MenusComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/menus works!/gi)).toBeTruthy();
  },
};
