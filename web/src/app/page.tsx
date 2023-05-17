import { User } from 'lucide-react';
import Image from 'next/image';
import logo from '../assets/svg/logo.svg';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-1 flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/svg/stars.svg)] bg-cover px-28 py-16">
        <div
          className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full
         bg-purple-700 opacity-50 blur-full"
        ></div>

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

        <a className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>

          <p className="w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        <div className="space-y-5">
          <Image src={logo} alt="Logo da NLW" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="font-sans text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
          Feito por Ricardo Pellicioli
        </div>
      </div>

      <div className="flex flex-col bg-[url(../assets/svg/stars.svg)] bg-cover p-16">
        <div className="flex h-full flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="cursor-pointer underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
