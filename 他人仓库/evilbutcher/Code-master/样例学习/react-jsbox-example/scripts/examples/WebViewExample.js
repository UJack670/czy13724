import React from 'react'

const { width, height } = $device.info.screen

const html = $file.read('/report.html').string

export default function WebViewExample() {
  return <web frame={$rect(0, 0, width, width)} html={html} />
}































































// Adding a dummy sgmodule commit(25)
// Adding a dummy plugin commit(23)
// Adding a dummy stoverride commit(20)
