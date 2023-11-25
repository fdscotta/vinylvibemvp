'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <>
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder={placeholder}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="amount-error"
                    onKeyUp={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                    />
                </div>
{/*                 <div id="status-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.title &&
                    state.errors.title.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                        </p>
                    ))}
                </div> */}
            </div>
        </>
    )
}