import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { Post, PostType } from './components/Post.tsx';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Welington-dos-Santos.png',
      name: 'Welington dos Santos',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera', },
      { type: 'paragraph', content: 'Acabei de subir uma projeto', },
      { type: 'link', content: 'welington.design/doctorcare', },
    ],
    publishedAt: new Date('2024-07-19 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://conteudo.imguol.com.br/c/bol/fotos/b9/2017/05/08/muralha-da-china-1494296179991_615x300.jpg',
      name: 'Gabriel dos Santos',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera', },
      { type: 'paragraph', content: 'Acabei de subir uma projeto', },
      { type: 'link', content: 'welington.design/doctorcare', },
    ],
    publishedAt: new Date('2024-07-23 16:30:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

