import type { Meta, StoryObj } from '@storybook/angular';
import { CollapsibleComponent } from './collapsible.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CollapsibleComponent> = {
  component: CollapsibleComponent,
  title: 'Collapsible',
  parameters: {
    docs: {
      description: {
        component: 'An interactive component which expands/collapses a panel.'
      }
    }
  }
};
export default meta;
type Story = StoryObj<CollapsibleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/collapsible works!/gi)).toBeTruthy();
  },
};
