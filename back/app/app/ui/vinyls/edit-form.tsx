'use client';

import { VinylsForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateVinyl } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

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
        {/* Vinyl Price */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
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
