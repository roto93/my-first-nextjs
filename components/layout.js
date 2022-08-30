/**
 * css modules 會把 css 限縮在 component 內 (因會在實際的 className 上加一些亂數)
 * 
 * 使用時，跟 react-native 裡 style 的用法很像
 * RN: <View style={styles.container}/>
 * Next: <div className={styles.container}/>
 * 
 * 注意！global css 只能在 _app.js 裡面 import
 * 所以如果要選擇 pure selector 如 section h1 p，都只能寫在 global.css 中
 */
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={'box1'}>
        <p className={styles.text}>text test</p>
      </div>
      <p className={styles.text}>text test</p>
      {children}
    </div>
  )
}