
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NewcastleUnitedTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Newcastle United Tickets | See The Magpies at St. James' Park!</title>
        <meta name="description" content="Buy official Newcastle United tickets for Premier League, Champions League, FA Cup, and League Cup matches. Experience the passionate atmosphere at St. James' Park." />
        <meta name="keywords" content="newcastle united tickets, newcastle tickets, magpies tickets, st james park tickets, premier league newcastle tickets, champions league newcastle tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/newcastle-united-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/premier-league-tickets" className="hover:text-green-600">Premier League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Newcastle United Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Newcastle United Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the passionate support and exciting football of Newcastle United at St. James' Park. The Magpies are a club with a rich history and a loyal fanbase, always creating a fantastic atmosphere.          </p>

          {/* Call to Action */}
          <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Magpies Tickets!</h2>
            <p className="mb-4">Tickets for Newcastle United matches are always in high demand. Don't miss your chance to be part of the action at St. James' Park.</p>
            <a href="#ticket-listings" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Newcastle Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Newcastle United home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Newcastle United Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Premier League Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/premier-league-tickets" className="text-green-600 hover:underline">Premier League Tickets</Link>
              <Link to="/champions-league-tickets" className="text-green-600 hover:underline">Champions League Tickets</Link>
              <Link to="/newcastle-united-vs-sunderland-tickets" className="text-green-600 hover:underline">Tyne-Wear Derby Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewcastleUnitedTicketsPage;
