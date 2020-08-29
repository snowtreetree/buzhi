import React,{Suspense,lazy,useRef,useEffect,useCallback, useState,useDebugValue} from "react";
import Use from "./use";
// import lazyComponent from '../components/lazyComponent'
import RefCompoent from '../components/ref'
import useCustom from '../custom/useCustom'

const LazyComponent = lazy(() => import('../components/lazyComponent'))

function Home() {
  const timeRef = useRef();
  const [a,setA] = useState(1)
  const {value} = useCustom(1)
  useEffect(() => {
    console.log('value',value)
    console.log('ref',timeRef)
    setTimeout(() => {
      timeRef.current.setNewTime()
      setA(2)
    }, 2000);
  })
  const memoizedCallback = useCallback(() => {
    return a
  },[a])
  console.log(memoizedCallback())
  return (
    <div>
      Home
      <Use />
      <RefCompoent ref={timeRef}/>
      <Suspense fallback={<div>loading...</div>}>
        <LazyComponent/>
        
      </Suspense>
    </div>
  );
}

export default Home;
