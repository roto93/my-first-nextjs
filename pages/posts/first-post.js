import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {

  return <>
    {/* 更改 Head 裡的東西 */}
    {/* 如果要一次更改所有頁面的Head，或是要修改<html>，則需要用 _document.js */}
    <Head>
      <title>First Post</title>

      {/* 用 next/script 提供的 <Script> 來讀取 script
      好處是方便掌握讀 script 的時機，也可以用 onLoad 在讀取完後做事
      strategy: beforeInteractive, afterInteractive, lazyOnload, worker 
        beforeInteractive: 在網頁可以互動前讀取
        afterInteractive: 在網頁可以互動後讀取(default)
        lazyOnload: 網頁閒置時讀取，適合一些比較不急的script，等其他要fetch的資料都抓好後再來讀取
        worker: 利用 web worker 來讀取 script (experimental)
        see: https://nextjs.org/docs/basic-features/script#off-loading-scripts-to-a-web-worker-experimental
      */}
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => { console.log('script loaded') }}
      />
    </Head>

    <h1>First Post</h1>
    <Link href="/">Back to home</Link>

    {/* 使用靜態圖片 */}
    {/* 圖片必須放在 public 資料夾裡 */}
    {/* Nextjs 會幫你 handle 圖片 resize 的問題，避免把過大的圖片傳送到小裝置上 */}
    <Image
      src={'/images/profile.jpg'}
      width={250}
      height={250}
      alt={'example'}
    />
  </>
} 