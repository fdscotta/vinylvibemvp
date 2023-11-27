'use client'
import { discogSearchByName } from '@/app/lib/discog';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function DiscogFinder (
    {
        placeholder,
    }: {
        placeholder: string,
    }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [results, setResults] = useState([])

    const handleSearch = useDebouncedCallback((term) => {

        discogSearchByName(term).then((data) =>(
            setResults(data)
        ));
/*         const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`); */
    }, 300);
    return (
        <>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
            </label>
            <div className="px-12" style={{ height: "90vh" }}>
                <div className="relative">
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder={placeholder}
                        className="pl-16 pr-4 py-4 rounded-md shadow-md bg-white border-0 w-full outline-none"
                        aria-describedby="amount-error"
                        onKeyUp={(e) => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                        />
                    </div>

                    <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
                        <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
                            Recommended
                        </li>
                        {results?.map((item) => (
                            <li key={item.id}
                            className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                    <h3 className="text-gray-900 font-medium text-md">{item.title}</h3>
                                    <p>{item.year}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}