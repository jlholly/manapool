import type { Meta, StoryObj } from '@storybook/angular';
import { PageHeaderComponent } from './page-header.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PageHeaderComponent> = {
  component: PageHeaderComponent,
  title: 'Page Header',
};
export default meta;
type Story = StoryObj<PageHeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/page-header works!/gi)).toBeTruthy();
  },
};
