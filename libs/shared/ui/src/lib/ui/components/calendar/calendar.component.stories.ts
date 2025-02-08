import type { Meta, StoryObj } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CalendarComponent> = {
  component: CalendarComponent,
  title: 'Calendar',
};
export default meta;
type Story = StoryObj<CalendarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/calendar works!/gi)).toBeTruthy();
  },
};
