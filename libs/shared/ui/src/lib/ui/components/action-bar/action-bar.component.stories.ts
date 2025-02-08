import type { Meta, StoryObj } from '@storybook/angular';
import { ActionBarComponent } from './action-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ActionBarComponent> = {
  component: ActionBarComponent,
  title: 'Action Bar',
};
export default meta;
type Story = StoryObj<ActionBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/action-bar works!/gi)).toBeTruthy();
  },
};
