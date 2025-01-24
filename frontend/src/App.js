import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailsLoader} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsRootLayout />, children: [
      { index: true, 
        element: <EventsPage />, 
        loader: eventsLoader,
      },
      { path: ':eventId', id: 'event-detail', loader: eventDetailsLoader, children:[
        { index: true, element: <EventDetailPage />, },
        { path: 'edit', element: <EditEventPage /> },
      ]},
      
      { path: 'new', element: <NewEventPage /> },
      
    ]},
    
  ]},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
