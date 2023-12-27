import Form from '@/app/ui/vinyls/edit-form';
import Breadcrumbs from '@/app/ui/vinyls/breadcrumbs';
import { fetchVinylById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Vinyl',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [vinyl] = await Promise.all([
    fetchVinylById(id),
  ]).catch(() => {
    notFound()
  });

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Vinyls', href: '/dashboard/vinyls' },
          {
            label: 'Edit Vinyl',
            href: `/dashboard/vinyls/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form vinyl={vinyl} />
    </main>
  );
}
