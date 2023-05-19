import { getUser } from '@/lib/auth';
import Image from 'next/image';

export function Profile() {
  const { avatarUrl, name } = getUser();

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <p className="w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Sair
        </a>
      </p>
    </div>
  );
}
