import type { StoryFn, Meta } from '@storybook/react';
import { Button, ConfigProvider, Layout, Space } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { AlbedoDrawer } from './albedo-drawer';
import { useState } from 'react';

const meta: Meta<typeof AlbedoDrawer> = {
  component: AlbedoDrawer,
  title: 'AlbedoDrawer',
  decorators: [
    (Story) => (
      <ConfigProvider>
        <StyleProvider hashPriority="high">
          <Story />
        </StyleProvider>
      </ConfigProvider>
    ),
  ],
};
export default meta;

const Template: StoryFn<typeof AlbedoDrawer> = (args) => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);

  return (
    <Layout.Content className="h-full w-full bg-neutral-50">
      <Space>
        <Button onClick={() => setOpenLeft(true)}>Open Left</Button>
        <Button onClick={() => setOpenRight(true)}>Open Right</Button>
        <Button onClick={() => setOpenTop(true)}>Open Top</Button>
        <Button onClick={() => setOpenBottom(true)}>Open Bottom</Button>
      </Space>

      <AlbedoDrawer
        {...args}
        open={openLeft}
        onClose={() => setOpenLeft(false)}
        placement="left"
      />
      <AlbedoDrawer
        {...args}
        open={openRight}
        onClose={() => setOpenRight(false)}
      />
      <AlbedoDrawer
        {...args}
        open={openTop}
        onClose={() => setOpenTop(false)}
        placement="top"
      />
      <AlbedoDrawer
        {...args}
        open={openBottom}
        onClose={() => setOpenBottom(false)}
        placement="bottom"
      />
    </Layout.Content>
  );
};

export const Story1 = Template.bind({});
Story1.storyName = '基本用法';
Story1.args = {
  children: 'Some random content',
};
