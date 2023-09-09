import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className='navbar flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex-1'>
        <Link href={"/home"}>
          <p className='pl-5 text-xl'>Tech. Education</p>
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered w-24 md:w-auto'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <Image
                src={"/image/user.png"}
                width={100}
                height={100}
                alt='placeholder'
              ></Image>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <Link href={"/home"}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href={"/logout"}>
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
