/**
 * 要引入 global css 的話，做法跟 react 一樣
 * 注意！global css 只能在 _app.js 裡面 import
 * 所以如果要選擇 pure selector 如 section h1 p，都只能寫在 global.css 中
 */

import '../styles/global.css'

import Layout from "../components/layout"

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App