// 请求 
import {
  getRepoList,
} from '../api/repos';
import {
  create
} from 'zustand';

export const useRepoStore = create((set) => ({
  repos: [],
  loading: false,
  error: null,
  fetchRepos: async () => {
    // 业务
    set({ loading: true, error: null });
    try {
      const res = await getRepoList('Srierin');
      set({ repos: res.data, loading: false })

    } catch (error) {
      set({ error: error.message, loading: false})
    }
  }
}))