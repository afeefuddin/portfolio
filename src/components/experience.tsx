import Image from 'next/image'
import React from 'react'

function Experience() {
  return (
<article className="rounded-xl p-4 ring-1 ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full "
      aria-hidden="true"
    >
        <Image src="/gsoc_image.png" height='100' width='100' className='rounded-full' alt='Gsoc Logo' />
    </div>

    <div>
    <Image src="/gsoc_image.png" height='50' width='50' className='sm:hidden rounded-full' alt='Gsoc Logo' />

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a className="hover:underline"> Google Summer of Code 2024 </a>
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        I am contributing to Zulip codebase helping them migrating their codebase from JavaScript to TypeScript. My work includes refactoring
        bad code, rewriting code at multiple instance, fixing node test and doing a clean migration.
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <p className="text-xs font-medium">May 2024 - Present</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
         Remote
        </p>
      </div>
    </div>
  </div>
</article>  )
}

export default Experience