import React from 'react';

const SpotifyLogin = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen flex items-center justify-center">
      <div className="bg-zinc-950 text-white w-full max-w-md p-8 rounded-md shadow-lg text-center">
        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify Logo"
            className="w-10 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Log in to Spotify</h1>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full py-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full py-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full py-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-full py-2">
            Continue with phone number
          </button>
        </div>

        <div className="my-6 border-t border-zinc-700" />

        <form className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email or username
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 rounded-sm bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email or username"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-full"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpotifyLogin;
