import Pagination from '@/app/ui/vinyls/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/vinyls/table';
import { CreateVinyl } from '@/app/ui/vinyls/buttons';
import { lusitana } from '@/app/ui/fonts';
import { VinylsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchVinylsPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinyls',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchVinylsPages(query);
  console.log(totalPages)

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Vinyls</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search vinyls..." />
        <CreateVinyl />
      </div>
      <Suspense key={query + currentPage} fallback={<VinylsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
