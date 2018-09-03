import Link from 'next/link'
import { Menu, Row, Col } from 'antd'

const { SubMenu, ItemGroup } = Menu

export default () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/tes/tes">
          <a>tes</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/tes/redux">
          <a>redux</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}