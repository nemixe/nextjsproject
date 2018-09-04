import Link from 'next/link'
import { Menu, Row, Col } from 'antd'

const { SubMenu, ItemGroup } = Menu

export default () => {
  return (
    <div>
      <Menu mode="horizontal" style={{background: '#02A1F7'}}>
        <Menu.Item className="tes">
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
      <style jsx>{`
        #tes {
          color: red;
        }
      `}</style>
    </div>
  )
}