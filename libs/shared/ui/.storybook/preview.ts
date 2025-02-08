import { setCompodocJson } from '@storybook/addon-docs/angular';
import { Preview } from '@storybook/angular';
import * as docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    }
  }
};

export default preview;