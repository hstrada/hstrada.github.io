import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" aria-label="Helena Strada" className="flex items-center gap-3">
      <Image src="/images/hs.svg" alt="" width={18} height={28} priority />
      <span className="font-display text-sm font-semibold tracking-tight">
        hstrada
      </span>
    </Link>
  );
};
