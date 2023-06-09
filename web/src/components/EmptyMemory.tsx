import Link from 'next/link';

export function EmptyMemory() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <Link
          href="/memories/new"
          className="cursor-pointer underline hover:text-gray-50"
        >
          criar agora!
        </Link>
      </p>
    </div>
  );
}
