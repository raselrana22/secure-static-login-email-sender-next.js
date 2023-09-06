import Image from "next/image";
import Link from "next/link";

export default function LoginBeforeNavBar() {
  return (
    <div className='navbar bg-lime-300 pr-6'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Welcome</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-12 rounded-full'>
              <Image
                src={"/image/placeholder-image-jpg.png"}
                width={100}
                height={100}
                alt='placeholder'
              ></Image>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-current rounded-box w-52'
          >
            <li className='text-white font-bold'>
              <Link href={"/welcome"}>
                <p>Home</p>
              </Link>
            </li>
            <li className='text-white font-bold'>
              <Link href={"/login"}>
                <p>Login</p>
              </Link>
            </li>
            <li className='text-white font-bold'>
              <Link href={"/welcome"}>
                <p>Profile</p>
              </Link>
            </li>
            <li className='text-white font-bold'>
              <Link href={"/welcome"}>
                <p>Contact</p>
              </Link>
            </li>
            <li className='text-white font-bold'>
              <Link href={"/welcome"}>
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
