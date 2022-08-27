import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return <>
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