import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { signIn } from 'next-auth/react';

function Header() {
  const router = useRouter();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a href="#" className="group headerLink">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="headerLink group">
          <MagnifyingGlassIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="headerLink group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="headerLink group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="headerLink group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="headerLink group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
      <img
        src={'https://avatarfiles.alphacoders.com/184/184063.jpg'}
        className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
      />
      {/* <button
        // onClick={signIn}
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
      >
        Login
      </button> */}
    </header>
  );
}

export default Header;
