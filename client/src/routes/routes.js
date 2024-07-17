import { AddBook, Book, Home, SearchBook } from '../components';
import AllBooks from '../components/AllBooks';

export const allRoutes = [
  { id: 1, path: '/', element: Home },
  { id: 2, path: '/addBook', element: AddBook },
  { id: 3, path: '/search', element: SearchBook },
  { id: 4, path: '/:bookId', element: Book },
  { id: 5, path: '/books', element: AllBooks },
];
