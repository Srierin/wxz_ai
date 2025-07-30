import {
  create
} from 'zustand';
import {
  getImages
} from '../api/home';


export const useImageStore = create((set,get) => ({
  images: [], // 初始状态为一个空数组
  page: 1, // 初始页码为1
  loading: false, // 初始加载状态为false
  fetchMore: async () => {
    // 如果还在请求中，不要重复请求 
    if(get().loading) return; // 如果正在加载中，直接返回
    set({loading:true}) // 设置加载状态为true 请求中
    const res = await getImages(get().page); // 调用API获取新的图片数据
    console.log(res);
    const newImages = res.data;
    // 让我们拿到之前的状态 state
    set((state)=>({
      images: [...state.images,...newImages], // 将新的图片数据添加到images数组中
      page: state.page + 1, // 页码加1
      loading: false, // 加载状态为false 请求完成
    }))
  }
}))

