import Image from 'next/image';
import { UpdateVinyl, DeleteVinyl } from '@/app/ui/vinyls/buttons';
import VinylStatus from '@/app/ui/vinyls/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredVinyls } from '@/app/lib/data';

export default async function VinylsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const vinyls = await fetchFilteredVinyls(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {vinyls?.map((vinyl) => (
              <div
                key={vinyl.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={vinyl.photo}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${vinyl.title}'s profile picture`}
                      />
                      <p>{vinyl.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">Year</p>
                  </div>
                  <VinylStatus status={vinyl.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(vinyl.price)}
                    </p>
                    <p>{vinyl.address}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateVinyl id={vinyl.id} />
                    <DeleteVinyl id={vinyl.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Vinyl Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Location
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {vinyls?.map((vinyl) => (
                <tr
                  key={vinyl.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={vinyl.photo}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${vinyl.title}'s profile picture`}
                      />
                      <p>{vinyl.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(vinyl.publish_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(vinyl.price)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {vinyl.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <VinylStatus status={vinyl.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateVinyl id={vinyl.id} />
                      <DeleteVinyl id={vinyl.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
