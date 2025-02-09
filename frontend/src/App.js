import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailsLoader, action as deleteEventAction } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsRootLayout />, children: [
      { index: true, 
        element: <EventsPage />, 
        loader: eventsLoader,
      },
      { path: ':eventId', id: 'event-detail', loader: eventDetailsLoader, children:[
        { index: true, element: <EventDetailPage />, action: deleteEventAction },
        { path: 'edit', element: <EditEventPage />, action:manipulateEventAction },
      ]},
      
      { path: 'new', element: <NewEventPage />, action: manipulateEventAction },
      
    ]},
    {
      path: 'newsletter',
      element: <NewsletterPage />,
      action: newsletterAction,
    },
  ]},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
