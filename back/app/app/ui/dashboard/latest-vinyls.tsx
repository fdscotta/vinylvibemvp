import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestVinyls } from '@/app/lib/data';
import VinylStatus from '../vinyls/status';
import { formatDateToLocal } from '@/app/lib/utils';
import { auth, getUser } from '@/auth';

export default async function LatestVinyls() {

  const session = await auth()
  const sessionEmail = session?.user?.email || ''
  const user = await getUser(sessionEmail)
  const latestVinyls = await fetchLatestVinyls(user?.id!);

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Vinyls
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestVinyls.map((vinyl, i) => {
            return (
              <div
                key={vinyl.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={vinyl.photo}
                    alt={`${vinyl.title}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {vinyl.title}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {formatDateToLocal(vinyl.publish_date)}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  <VinylStatus status={vinyl.status} />
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
