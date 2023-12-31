import UserAlbumsList from '../components/UserAlbums/UserAlbumsList';
import UserAlbum from '../components/UserAlbums/UserAlbum';
import UserPostsList from '../components/UserPosts/UserPostsList';
import UsersList from '../components/Users/UsersList';
import { createBrowserRouter } from 'react-router-dom'
import UserPost from '../components/UserPosts/UserPost';

const router = createBrowserRouter([
    {
        path: '/deploy-test',
        element: <UsersList />,
    },
    {
        path: 'deploy-test/user/:id/albums',
        element: <UserAlbumsList />,
        children: [
            {
                path: ':albumId',
                element: <UserAlbum />,
            },
        ],
    },
    {
        path: 'deploy-test/user/:id/posts',
        element: <UserPostsList />,
        children: [
            {
                path: ':postId',
                element: <UserPost />,
            },
        ],
    }
])

export default router
