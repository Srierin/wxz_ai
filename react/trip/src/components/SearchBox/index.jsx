import {
  memo,
  useRef,
  useState,
  useEffect,
  useMemo
} from 'react'
import {
  debounce
} from '@/utils'
import {
  ArrowLeft,
  Close
} from '@react-vant/icons'
import styles from './search.module.css'

const SearchBox = (props) => {
  // 单向数据流
  // 子父通信 
  const [query, setQuery] = useState('')
  const { handleQuery } = props
  // 非受控组件
  const queryRef = useRef(null);
  const handleChange = (e) => {
    let val = e.currentTarget.value;
    setQuery(val);
  }
  const clearQuery = () => {
    setQuery('');
    
    queryRef.current.value = ''; // 清空输入框的
    queryRef.current.focus();
  }
  // 1.防抖 
  // 2.useMemo 缓存闭包结果 否则会反复执行
  const handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 300);
  }, [handleQuery])

  const displayStyle = query ? { display: 'block' } : { display: 'none' };
  useEffect(() => {
    console.log(query, '//////');
    handleQueryDebounce(query);
  }, [query, handleQueryDebounce])
  return (
    <div className={styles.wrapper}>
      <ArrowLeft onClick={() => history.go(-1)} />
      <input
        type="text"
        className={styles.ipt}
        placeholder="请输入旅游相关内容"
        ref={queryRef}
        onChange={
          handleChange
        }
      />
      {/* 移动端用户体验 */}
      <Close onClick={clearQuery} style={displayStyle} />
    </div>
  )
}

export default memo(SearchBox)