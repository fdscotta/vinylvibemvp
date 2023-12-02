'use client'
import { discogsSearchById, discogsSearchByName } from '@/app/lib/discog';
import Image from 'next/image';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
    placeholder: string,
    vinyl: any,
    setVinyl: (vinyl:any) => void,
}

export default function DiscogFinder({ placeholder, vinyl, setVinyl }: Props) {

    const [results, setResults] = useState([]);
    const [coverImage, setCoverImage] = useState(
        {
            uri: "",
            width: 0,
            height: 0
        });

    const handleSearch = useDebouncedCallback((term) => {
        (term) ?
            discogsSearchByName(term).then((data) =>{
                setResults(data);
                setCoverImage('')
            })
        : setResults([])
    }, 300);

    const handleVinylClick = useDebouncedCallback((id) => {
        discogsSearchById(id).then((data) => {
            console.log(data)
            setCoverImage({
                ... coverImage,
                uri: data.images[0].uri,
                width: data.images[0].width,
                height: data.images[0].height
            });
        })
    }, 300);

    return (
        <>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
            </label>
            <div className="px-12">
                <div className="relative">
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-0 flex items-center px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                        onChange={(e)=>{
                            setVinyl(null)
                        }}
                        value={vinyl?.title}
                        />
                    </div>

                    {results.length > 0 &&
                        <ul className="rounded-md shadow-md bg-white absolute left-0 right-0 -bottom-18 mt-3 p-3">
                            {results?.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={()=>{
                                        handleVinylClick(item.id)
                                        setVinyl(item)
                                        setResults([])
                                    }}
                                    className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                    <div className="flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-gray">
                                        <h3 className="text-gray-900 font-medium text-md">{item.title}</h3>
                                        <p>{item.year}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                {coverImage.width > 0 &&
                <div className="relative flex h-64 w-96 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                    data-dialog-target="image-dialog"
>
                    <Image
                        src={coverImage.uri}
                        width={coverImage.width}
                        height={coverImage.height}
                        className="h-full w-full object-cover object-center"
                        alt="Vinyl Selected"
                    />
                </div>
                }
            </div>
        </>
    )
}