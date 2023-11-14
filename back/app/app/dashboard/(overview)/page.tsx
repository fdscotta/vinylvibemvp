// add import for vinyls list for user
import { Suspense } from 'react';

import LatestVinyls from '@/app/ui/dashboard/latest-vinyls';
import { LatestVinylsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<LatestVinylsSkeleton />}>
          <LatestVinyls />
        </Suspense>
      </div>
    </main>
  );
}
