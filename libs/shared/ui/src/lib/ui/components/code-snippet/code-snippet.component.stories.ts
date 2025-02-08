import type { Meta, StoryObj } from '@storybook/angular';
import { CodeSnippetComponent } from './code-snippet.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CodeSnippetComponent> = {
  component: CodeSnippetComponent,
  title: 'Code Snippet',
};
export default meta;
type Story = StoryObj<CodeSnippetComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/code-snippet works!/gi)).toBeTruthy();
  },
};
