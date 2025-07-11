import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef();
//   console.log(boxRef.current, boxRef);

//   useEffect(() => {
//     console.log('useEffect height', boxRef.current.offsetHeight);
//   }, [])

//   useLayoutEffect(() => {
//     console.log('useLayoutEffect height', boxRef.current.offsetHeight);
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{ height: 100 }}></div>
//     </>
//   )
// }

// function App() {
//   const [content, setContent] = useState('理解这一机制能避免异步代码逻辑错误（如执行顺序问题），是高效使用 JavaScript 的基础。');
//   const ref = useRef();
//   // useEffect(() => {
//   //   setContent('山巅云海间，青衫剑客负手而立，对身后少年说道。剑术再高，不过斩得断江海，斩不尽人心沟壑。你问我何为剑修，不是手中有剑，是心中那把尺，量得了是非，镇得住善恶。山下那些蝇营狗苟，笑你痴骂你迂，何必计较。江湖如染缸，白袍进去，朱紫出来。可你若连本心都守不住，纵使天下无敌，也不过是条披着人皮的孽龙。记住，出剑前先问三问，这一剑，可对得起昨日之我，可护得住身后之人，可留得住明日之路。若有一问迟疑，剑便钝了。忽而拂袖，云海裂开一线天光看好了，这一剑不教你杀人，只教你见天地，见众生，最后见自己')
//   //   ref.current.style.height = '200px';
//   // }, [])

//   useLayoutEffect(()=>{
//     // 阻塞渲染 会有同步的感觉
//     setContent('山巅云海间，青衫剑客负手而立，对身后少年说道。剑术再高，不过斩得断江海，斩不尽人心沟壑。你问我何为剑修，不是手中有剑，是心中那把尺，量得了是非，镇得住善恶。山下那些蝇营狗苟，笑你痴骂你迂，何必计较。江湖如染缸，白袍进去，朱紫出来。可你若连本心都守不住，纵使天下无敌，也不过是条披着人皮的孽龙。记住，出剑前先问三问，这一剑，可对得起昨日之我，可护得住身后之人，可留得住明日之路。若有一问迟疑，剑便钝了。忽而拂袖，云海裂开一线天光看好了，这一剑不教你杀人，只教你见天地，见众生，最后见自己');
//     ref.current.style.height = '200px';
//   },[])
//   return (
//     <div ref={ref} style={{ height: '50px', background: 'lightblue' }}>{content}</div>
//   )
// }

// 弹窗
function Modal() {
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight / 2 - height) / 2}px`;
  }, []);

  return <div ref={ref} style={{ background: 'red', position: 'absolute', height: '200px', width: '200px' }}>弹窗</div>
}

function App() {
  return (
    <>
      <Modal />
    </>
  )
}

export default App
