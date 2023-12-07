'use client'
import { createDiscogsVinylData } from '@/app/lib/actions';
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

    const [results, setResults] = useState({});
    const [coverImage, setCoverImage] = useState(
        {
            uri: "",
            width: 0,
            height: 0
        });

    const handleSearch = useDebouncedCallback((term) => {
        (term.length > 0) ?
            discogsSearchByName(term).then((data) =>{
                setResults(data);
                setCoverImage({
                    uri: "",
                    width: 0,
                    height: 0
                })
            })
        : setResults([])
    }, 300);

    const handleVinylClick = useDebouncedCallback((id, item) => {
        discogsSearchById(id).then((data) => {
            setCoverImage({
                ... coverImage,
                uri: data.images[0].uri,
                width: data.images[0].width,
                height: data.images[0].height
            })
            setVinyl(data)
            createDiscogsVinylData(data.id, data)
        })
        setResults([])
    }, 300);

    console.log(vinyl)
    return (
        <>
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
                                        handleVinylClick(item.id, item)
                                    }}
                                    className="grid grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50">
                                    <div className="flex justify-center items-center">
                                        <img
                                         src={item.cover_image}
                                         className="h-16 w-16"
                                         alt={item.title}
                                         />
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
                <div className="flex h-48 w-full flex-row bg-white p-4 items-center">
                    <Image
                        src={coverImage.uri}
                        width={150}
                        height={150}
                        alt="Vinyl Selected"
                    />
                    <div className='flex flex-col ml-5 flex-grow h-36'>
                        {vinyl && vinyl.title && <div className=' text-lg text-gray-500'>
                            Title: <span className='text-base'>{vinyl.title}</span>
                        </div>}
                        {vinyl && vinyl.artist && <div className=' text-lg text-gray-500'>
                            Artist: <span className='text-base'>{vinyl.artist[0].name}</span>
                        </div>}
                        {vinyl && vinyl.genres && <div className=' text-lg text-gray-500'>
                            Genre: <span className='text-base'>{vinyl.genres[0]}</span>
                        </div>}
                        {vinyl && vinyl.year && <div className=' text-lg text-gray-500'>
                            Year: <span className='text-base'>{vinyl.year}</span>
                        </div>}
                    </div>
                </div>
                }
            </div>
        </>
    )
}