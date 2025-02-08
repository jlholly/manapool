import type { Meta, StoryObj } from '@storybook/angular';
import { MenuBarComponent } from './menu-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenuBarComponent> = {
  component: MenuBarComponent,
  title: 'Menu Bar',
};
export default meta;
type Story = StoryObj<MenuBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/menu-bar works!/gi)).toBeTruthy();
  },
};
