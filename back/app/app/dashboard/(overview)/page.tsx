// add import for vinyls list for user
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  // import skeleton for vinylslist
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Your Vinyls
      </h1>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div> */}
    </main>
  );
}
