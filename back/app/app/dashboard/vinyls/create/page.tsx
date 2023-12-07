'use client';
import FormVinyl from '@/app/ui/vinyls/create-form';
import Breadcrumbs from '@/app/ui/vinyls/breadcrumbs';
// import { Metadata } from 'next';
import DiscogFinder from '@/app/ui/vinyls/discogFinder';
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Create Vinyl',
// };

export default function Page() {

  const [vinyl, setVinyl] = useState(null);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Vinyls', href: '/dashboard/vinyls' },
          {
            label: 'Create Vinyl',
            href: '/dashboard/vinyls/create',
            active: true,
          },
        ]}
      />

      <DiscogFinder placeholder={'Enter the title'} vinyl={vinyl} setVinyl={setVinyl} />

      {vinyl && <FormVinyl vinyl={vinyl} />}
    </main>
  );
}
