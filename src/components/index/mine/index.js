import React from 'react'

// 按需加载
// babel-plugin-import 会帮助你加载 JS 和 CSS
// import 'antd-mobile/dist/antd-mobile.css'
import { Button, Toast } from 'antd-mobile'

function showToast() {
  Toast.info('This is a toast tips !!!', 1)
}

function Mine() {
  return (
    <div className="mine-tab">
      <Button type="primary" inline>
        primary
      </Button>

      <Button onClick={showToast}>text only</Button>

      <Button icon="check-circle-o">with icon</Button>
    </div>
  )
}

export default Mine
