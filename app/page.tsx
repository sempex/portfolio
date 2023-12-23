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
        </div>
      </div>
    </main>
  )
}
