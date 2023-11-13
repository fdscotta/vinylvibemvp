// add import for vinyls list for user
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
