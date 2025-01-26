import { html } from 'lit';
import '../src/made-with-jenny.js';

export default {
  title: 'MadeWithJenny',
  component: 'made-with-jenny',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <made-with-jenny
      style="--made-with-jenny-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </made-with-jenny>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
