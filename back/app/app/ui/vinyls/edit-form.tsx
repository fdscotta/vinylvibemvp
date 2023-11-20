'use client';

import { VinylsForm } from '@/app/lib/definitions';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateVinyl } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import RadioSelector from './radioSelector';

export default function EditVinylForm({
  vinyl,
}: {
  vinyl: VinylsForm;
}) {
  const initialState = { message: null, errors: {} };
  const updateVinylWithId = updateVinyl.bind(null, vinyl.id);
  const [state, dispatch] = useFormState(updateVinylWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={vinyl.title}
                placeholder="Enter the Title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <fieldset>
              <RadioSelector
                fieldId="album_status"
                fieldName="Album Status"
                choices={["It's Used","It's Brand New"]}
                choicesSlug={["used","new"]}
                defaultValue={vinyl.album_status}
                />
              <div id="status-error" aria-live="polite" aria-atomic="true">
                {state.errors?.album_status &&
                  state.errors.album_status.map((error: string) => (
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
                fieldId="media_condition"
                fieldName="Media Condition"
                choices={["M", "NM", "VG+", "VG", "G+", "G", "F", "P"]}
                choicesSlug={["m", "nm", "vg+", "vg", "g+", "g", "f", "p"]}
                defaultValue={vinyl.media_condition}
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
                defaultValue={vinyl.packaging_condition}
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
            <fieldset>
              <RadioSelector
                fieldId="is_auction"
                fieldName="Is Auction"
                choices={["True", "False"]}
                choicesSlug={["true", "false"]}
                defaultValue={vinyl.is_auction? "true":"false"}
                />
              <div id="status-error" aria-live="polite" aria-atomic="true">
                {state.errors?.is_auction &&
                  state.errors.is_auction.map((error: string) => (
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
                fieldId="accept_offers"
                fieldName="Accept Offers"
                choices={["True", "False"]}
                choicesSlug={["true", "false"]}
                defaultValue={vinyl.accept_offers? "true":"false"}
                />
              <div id="status-error" aria-live="polite" aria-atomic="true">
                {state.errors?.accept_offers &&
                  state.errors.accept_offers.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </fieldset>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="listing_price"
                name="listing_price"
                type="number"
                placeholder="Enter the Listing Price"
                defaultValue={vinyl.listing_price}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Enter the Photo"
                defaultValue={vinyl.photo}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Enter the Description"
                defaultValue={vinyl.description}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="adv_store_location"
                name="adv_store_location"
                type="text"
                placeholder="Enter the Store Location"
                defaultValue={vinyl.adv_store_location}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="adv_cost"
                name="adv_cost"
                type="number"
                placeholder="Enter the Cost"
                defaultValue={vinyl.adv_cost}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="adv_sku"
                name="adv_sku"
                type="text"
                placeholder="Enter the SKU"
                defaultValue={vinyl.adv_sku}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>

          {state.errors?.title ? (
            <div
              id="amount-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.title.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
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
        <Button type="submit">Edit Vinyl</Button>
      </div>
    </form>
  );
}
