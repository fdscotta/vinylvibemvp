'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createVinyl } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import RadioSelector from './radioSelector';
import { useEffect, useState } from 'react';

interface Props {
  vinyl:any
}

export default function Form({vinyl}:Props) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createVinyl, initialState);
  const [ discogsVinylid, setDiscogsVinylid ] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setDiscogsVinylid(vinyl.id)
    setTitle(vinyl.title)
  }, [vinyl]);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
              <div className="relative mt-2 rounded-md">
                <fieldset>
                  <RadioSelector
                    fieldId="media_condition"
                    fieldName="Media Condition"
                    choices={["M", "NM", "VG+", "VG", "G+", "G", "F", "P"]}
                    choicesSlug={["m", "nm", "vg+", "vg", "g+", "g", "f", "p"]}
                    defaultValue=''
                    />
                  <div id="status-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.media_condition &&
                      state.errors.media_condition.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </fieldset>
              </div>
              <div className="relative mt-2 rounded-md">
                <fieldset>
                  <RadioSelector
                    fieldId="packaging_condition"
                    fieldName="Packaging Condition"
                    choices={["M", "NM", "VG+", "VG", "G+", "G", "F", "P", "X", "NC"]}
                    choicesSlug={["m", "nm", "vg+", "vg", "g+", "g", "f", "p", "x", "nc"]}
                    defaultValue=''
                    />
                  <div id="status-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.packaging_condition &&
                      state.errors.packaging_condition.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </fieldset>
              </div>
              <div className="relative mt-2 rounded-md">
                <legend className="mb-2 block text-sm font-medium">
                  Price
                </legend>
                <div className="relative">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter the Price"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="price-error"
                  />
                  <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.price &&
                    state.errors.price.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="relative mt-2 rounded-md">
                <legend className="mb-2 block text-sm font-medium">
                  Photo
                </legend>
                <div className="relative">
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    placeholder="Enter the Photo"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="photo-error"
                  />
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.photo &&
                    state.errors.photo.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="relative mt-2 rounded-md">
                <legend className="mb-2 block text-sm font-medium">
                  Description
                </legend>
                <div className="relative">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter the Description"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="description-error"
                  />
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.description &&
                    state.errors.description.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="relative mt-2 rounded-md">
                <legend className="mb-2 block text-sm font-medium">
                  Address
                </legend>
                <div className="relative">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter the Address"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="address-error"
                  />
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.address &&
                    state.errors.address.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div className="relative mt-2 rounded-md">
                <legend className="mb-2 block text-sm font-medium">
                  SKU
                </legend>
                <div className="relative">
                  <input
                    id="sku"
                    name="sku"
                    type="text"
                    placeholder="Enter the SKU"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="sku-error"
                  />
                </div>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state.errors?.sku &&
                    state.errors.sku.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>

              <input
                id="discogs_vinyl_id"
                name="discogs_vinyl_id"
                type="hidden"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
                value={discogsVinylid}
              />
              <input
                id="title"
                name="title"
                type="hidden"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
                value={title}
              />

{/*               {state.errors?.title ? (
                <div
                  id="amount-error"
                  aria-live="polite"
                  className="mt-2 text-sm text-red-500"
                >
                  {state.errors.title.map((error: string) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              ) : null} */}

        </div>

        {state.message ? (
          <div aria-live="polite" className="my-2 text-sm text-red-500">
            <p>{state.message}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/vinyls"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Vinyl</Button>
      </div>

    </form>
  );
}
