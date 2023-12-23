import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-screen'>
      <div className='flex flex-col items-start space-y-16 p-16 w-2/4 mx-auto'>
        <div className='justify-end'>
          <a className='text-primary font-semibold'>Tim Reber</a>
          <br />
          <a className='text-secondary'>Computer Scientist</a>
        </div>
        <div className='justify-end'>
          <a className='text-primary font-semibold'>Today</a>
          <br />
          <a className='text-secondary'>I am currently working as a computer science apprentice at PostFinance, where I actively contribute to various projects.
            My passion lies in the field of Kubernetes technology, and I am committed to continually expanding my expertise in this dynamic area.</a>
        </div>
        <div className='justify-end'>
          <a className='text-primary font-semibold'>Projects</a>
          <div className="grid grid-cols-1 gap-8 mt-4">
            <a href="https://shiper.app/">
              <Card className='hover:bg-[#F5F4F4] transition-all'>
                <CardHeader>
                  <CardTitle>Shiper</CardTitle>
                  <CardDescription>
                    Shiper is a lightweight, easy to use and zero configuration
                    deployment platform for developers that like to focus on innovation.
                    Use our predefined templates or bring your own dockerfile to deploy your app in seconds.
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
            <a href="https://github.com/sempex/openslide">
              <Card className='hover:bg-[#F5F4F4] transition-all'>
                <CardHeader>
                  <CardTitle>OpenSlide</CardTitle>
                  <CardDescription>
                    OpenSlide is an open-source project that offers source code, CAD designs,
                    and a user-friendly web interface, enabling you to construct your own camera
                    slider at a significantly lower cost with much more control.
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
