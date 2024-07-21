"use client";

import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Car, Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();
  return (
    <div className="max-w-7xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logoDark.jpg" alt="FredCars" width={50} height={50} />
          <span className="text-xl font-bold">FredCars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-9">
          <Link href="/cars">Lista de autos</Link>
          <Link href="/dashboard">Dashboard</Link>
          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-black"
                  }`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Iniciar Sesión
                <User className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
