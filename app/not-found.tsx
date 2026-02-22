"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sorry, we couldn{"'"}t find the page you{"'"}re looking for.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Go Home
            </Link>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
