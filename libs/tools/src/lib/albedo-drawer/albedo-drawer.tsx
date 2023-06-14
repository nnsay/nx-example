import { Drawer, DrawerProps } from 'antd'
import styles from './albedo-drawer.module.css'

/**
 * 基于antd的`Drawer`的样式封装。它继承了`Drawer`的所有属性，您可以按需要自定义组件属性
 */
export const AlbedoDrawer: React.FC<DrawerProps> = props => (
  <Drawer
    data-cy='albedo-drawer'
    className={
      props.placement ? styles[`drawer-panel-${props.placement}`] : styles['drawer-panel-right']
    }
    {...props}
  />
)
