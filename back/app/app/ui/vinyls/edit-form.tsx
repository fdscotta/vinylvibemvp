'use client';

import { VinylsForm } from '@/app/lib/definitions';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateVinyl } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import RadioSelector from './radioSelector';
import { fields } from '@/app/translations/vinyl_crud'

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
            {fields.es.title.name}
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={vinyl.title}
                placeholder={fields.es.title.placeholder}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
                disabled
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <fieldset>
              <RadioSelector
                fieldId="media_condition"
                fieldName={fields.es.standardConditions.name}
                choices={fields.es.standardConditionsOptions}
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
                fieldName={fields.es.standardConditionsPackages.name}
                choices={fields.es.standardConditionsPackagesOptions}
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
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                placeholder={fields.es.price.placeholder}
                defaultValue={vinyl.price}
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
                placeholder={fields.es.photo.placeholder}
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
                placeholder={fields.es.description.placeholder}
                defaultValue={vinyl.description}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                placeholder={fields.es.address.placeholder}
                defaultValue={vinyl.address}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sku"
                name="sku"
                type="text"
                placeholder={fields.es.sku.placeholder}
                defaultValue={vinyl.sku}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
            </div>
          </div>
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
