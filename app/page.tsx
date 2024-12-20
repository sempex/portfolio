import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { defineCustomElements as definePostComponents } from "@swisspost/design-system-components/loader";
definePostComponents();
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="flex flex-col items-start space-y-12 p-5 max-w-screen-md mx-auto">
        <div className="flex items-center space-x-3">
          <Image
            src={`/profile_picture.webp`}
            alt={"profile_picture"}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="">
            <a className="text-primary font-semibold">Tim Reber</a>
            <br />
            <a className="text-secondary">Computer Scientist</a>
          </div>
          <button></button>
        </div>
        <div className="">
          <a className="text-primary font-semibold">Today</a>
          <br />
          <a className="text-secondary">
            I am currently working as a computer science apprentice at
            PostFinance, where I actively contribute to various projects. My
            passion lies in the field of Kubernetes technology, and I am
            committed to continually expanding my expertise in this dynamic
            area.
          </a>
        </div>
        <div className="">
          <a className="text-primary font-semibold">Projects</a>
          <div className="grid grid-cols-1 gap-8 mt-4">
            <a href="https://shiper.app/">
              <Card className="hover:bg-[#F5F4F4] transition-all">
                <CardHeader>
                  <CardTitle>Shiper</CardTitle>
                  <CardDescription>
                    Shiper is a lightweight, easy to use and zero configuration
                    deployment platform for developers that like to focus on
                    innovation. Use our predefined templates or bring your own
                    dockerfile to deploy your app in seconds.
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
            <a href="https://github.com/sempex/openslide">
              <Card className="hover:bg-[#F5F4F4] transition-all">
                <CardHeader>
                  <CardTitle>OpenSlide</CardTitle>
                  <CardDescription>
                    OpenSlide is an open-source project that offers source code,
                    CAD designs, and a user-friendly web interface, enabling you
                    to construct your own camera slider at a significantly lower
                    cost with much more control.
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
            <a href="https://github.com/sempex/wishtree">
              <Card className="hover:bg-[#F5F4F4] transition-all">
                <CardHeader>
                  <CardTitle>WishTree</CardTitle>
                  <CardDescription>
                    WishTree is a versatile platform designed to simplify and
                    organize Secret Santa games for families, friends, or
                    workplaces, whether on a small or large scale. Create a
                    group, invite participants, and let them add their wish
                    lists. The platform ensures a fun, fair, and seamless
                    drawing process for everyone involved.
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </div>
        <div>
          <a className="text-primary font-semibold">Get in touch</a>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <a
              className="text-secondary"
              href="https://www.instagram.com/timreber_/"
            >
              Instagram
            </a>
            <a
              className="text-secondary"
              href="https://www.linkedin.com/in/tim-reber-79a337230/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
