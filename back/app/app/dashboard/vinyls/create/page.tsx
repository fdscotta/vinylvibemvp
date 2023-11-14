import Form from '@/app/ui/vinyls/create-form';
import Breadcrumbs from '@/app/ui/vinyls/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Vinyl',
};

export default async function Page() {

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
    </main>
  );
}
