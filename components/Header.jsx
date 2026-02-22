"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { Building, Plus, Ticket } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();
  const [modal, setShowUpgradeModal] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* {logo} */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/spott.png"
              alt="Spott logo"
              height={500}
              width={500}
              className="w-full h-11"
              priority
            />
          </Link>
          {/* {Desktop search bar} */}
          {/* {Right side actions} */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUpgradeModal()}
            >
              Pricing
            </Button>
            <Button variant="ghost" size="sm" className={"mr-2"}>
              <Link href={"/explore"}>Explore Events</Link>
            </Button>
            <Authenticated>
              {/* {Create Event Button} */}
              <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    href="/my-tickets"
                    label="My Tickets"
                    labelIcon={<Ticket size={16} />}
                  ></UserButton.Link>
                  <UserButton.Link
                    href="/my-events"
                    label="My Events"
                    labelIcon={<Building size={16} />}
                  ></UserButton.Link>
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            {/* Show the user button when the user is signed in */}
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>
        {isLoading /* {Mobile search bar} */ && (
          <div className="absolute left-0 w-full">
            <BarLoader width={"100%"} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
