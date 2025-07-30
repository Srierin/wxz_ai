import styles from './card.module.css';
import {
  useRef,
  useEffect,
} from 'react';

const ImageCard = (props) => {

  const { url, height } = props;
  const imgRef = useRef(null); // 拿到img的ref
  useEffect(() => { // 监听img的ref 出现视窗了 加载图片
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) { // 出现了
        const img = entry.target; // 拿到img
        const oImg = document.createElement('img'); // 创建一个img
        oImg.src = img.dataset.src; // 加载图片
        oImg.onload = function () {
          img.src = img.dataset.src; // 加载图片
        }
        // img.src = img.dataset.src || ''; // 加载图片
        obs.unobserve(img); // 取消监听
      }
    })
    if (imgRef.current) observer.observe(imgRef.current);
  }, [])
  return (
    <div style={{ height }} className={styles.card}>
      <img ref={imgRef} data-src={url} className={styles.img} />
    </div>
  )
}

export default ImageCard;