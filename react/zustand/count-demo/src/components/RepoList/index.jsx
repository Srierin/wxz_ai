import {
  useRepoStore,
} from "../../store/repos";
import { useEffect } from "react";

const RepoList = () => {
  const {
    repos,
    loading,
    error,
    fetchRepos,
  } = useRepoStore();
  useEffect(() => {
    fetchRepos();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>RepoList</h2>
      <ul>
        {
          repos.map((repo) => {
            return (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                <p>{repo.description || 'No description'}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default RepoList;