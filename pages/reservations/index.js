import { useState, useEffect } from 'react';
import { createClient } from '../../prismicio';
import { resolveLocaleFromNext } from '../../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../../lib/withAlternateLanguageURLs';
import Head from 'next/head';

const Reservations = ({ isAuthenticated: initialAuthStatus, locale }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthStatus);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define language content based on locale
  const content = {
    'fr': {
      description:"Réservations disponibles pour voisins corporatifs uniquement du Toasteur. si vous voulez y avoir accès vous présenter au restaurant ou contacter nous.",
      connection: 'Connexion',
      usernameLabel: 'Utilisateur',
      passwordLabel: 'Mot de passe',
      loginButton: 'Se connecter',
      wrongCredentials: 'Ce ne sont pas les bons identifiants',
      placeholderUser: 'Nom utilisateur',
      placeholderPwd: 'Votre mot de passe'

    },
    'en-ca': {
      description:"Reservations available for Toasteur's corporate neighbors only. If you wish to have access, please come to the restaurant or contact us.",
      connection: 'Connection',
      usernameLabel: 'User',
      passwordLabel: 'Password',
      loginButton: 'Log in',
      wrongCredentials: 'These are the wrong identifiers',
      placeholderUser: 'Username',
      placeholderPwd: 'Your password'

    }
  };

  // Use content based on locale (default to French if not provided)
  const currentContent = content[locale] || content['fr'];

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, locale }) // Pass locale to the API
    });

    const result = await res.json();
    if (result.isAuthenticated) {
      // Set expiration for 30 days from now
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

      // Save the flag and expiration to localStorage
      localStorage.setItem('alreadySignedAsPro', 'verifiedByToasteur');
      localStorage.setItem('authExpiration', expirationTime.toString());

      setIsAuthenticated(true);
    } else {
      alert(currentContent.wrongCredentials);
    }
  };

  // Check for localStorage verification
  useEffect(() => {
    const isVerified = localStorage.getItem('alreadySignedAsPro');
    const expirationTime = localStorage.getItem('authExpiration');
    const currentTime = new Date().getTime();

    if (isVerified === 'verifiedByToasteur' && expirationTime) {
      if (currentTime < parseInt(expirationTime, 10)) {
        setIsAuthenticated(true); // Still valid
      } else {
        // Expired, clear localStorage
        localStorage.removeItem('alreadySignedAsPro');
        localStorage.removeItem('authExpiration');
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#041e42] flex-col max-sm:px-7">
      <p className='text-white my-10 mb-20 text-wrap max-sm:mx-4 text-center'>  {currentContent.description}</p>
        <div className="p-16 bg-white shadow-lg rounded-md w-full max-w-3xl max-sm:p-10  ">
          <h2 className="mb-8 text-2xl font-semibold text-gray-800 text-center">
            {currentContent.connection}
          </h2>
          <form onSubmit={handleLogin} className="space-y-10 ">
            <div>
              <label className="block mb-3 text-lg font-medium text-gray-700">
                {currentContent.usernameLabel}
              </label>
              <input
                type="text"
                placeholder={currentContent.placeholderUser}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#ff5c39] focus:border-[#ff5c39]"
                required
              />
            </div>
            <div>
              <label className="block mb-3 text-lg font-medium text-gray-700">
                {currentContent.passwordLabel}
              </label>
              <input
                type="password"
                value={password}
                placeholder={currentContent.placeholderPwd}

                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-xl bg-[#041e42] text-white px-4 py-3 rounded-md font-medium hover:bg-[#ff5c39] focus:outline-none focus:ring-2 focus:ring-[#ff5c39]"
            >
              {currentContent.loginButton}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-screen">
        <iframe
          src="https://reservation.carbonaraapp.com/Canada/Montreal/Le-Toasteur-Villeray-Inc"
          title="Le Toasteur Villeray Reservations"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Reservations;

// Server-side logic to get the credentials from Prismic CMS
export async function getServerSideProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const resolvedLocale = resolveLocaleFromNext(locale);

  const page = await client.getSingle('reservations', {
    lang: resolvedLocale
  });

  const adminUsername = page.data.username;
  const adminPassword = page.data.password;

  return {
    props: {
      adminUsername,
      adminPassword,
      isAuthenticated: false,
      locale: resolvedLocale
    }
  };
}
