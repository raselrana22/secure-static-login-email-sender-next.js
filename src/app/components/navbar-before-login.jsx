import Image from "next/image";
import Link from "next/link";

export default function NavbarBeforeLogin() {
  return (
    <div className='navbar flex flex-row bg-gradient-to-r from-cyan-500 to-blue-500 pr-6'>
      <div className='flex-1'>
        <a className='text-lg md:text-xl pl-5'>Welcome</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className=' w-16 rounded-full'>
              <Image
                src={"/image/placeholder-image-jpg.png"}
                width={100}
                height={100}
                alt='placeholder'
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 md:w-64'
          >
            <li>
              <Link href={"/welcome"}>
                <p className='text-sm md:text-base'>Home</p>
              </Link>
            </li>
            <li>
              <Link href={"/signup"}>
                <p className='text-sm md:text-base'>SignUp</p>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <p className='text-sm md:text-base'>Login</p>
              </Link>
            </li>
            <li>
              <Link href={"/notice"}>
                <p className='text-sm md:text-base'>About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
