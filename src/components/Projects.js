import React from 'react'

const Projects = () => {
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-center snap-center font-mono" id="projects">
      <div className="text-gray-900 font-extrabold text-4xl mx-auto uppercase">Projects</div>
      <p className="text-center text-purple-700 font-extrabold text-3xl my-0 py-0">
        ____
      </p>
      <table className="max-w-4xl mx-auto my-9">
        <tbody>
        <tr className='border-b'>
          <td className="align-top w-3/6 text-2xl font-medium px-8">
          <span className="text-3xl font-semibold whitespace-nowrap">Query</span> Editor
            <div className="text-xs">
            JUL '20 - SEP '20</div>
          </td>
          <td className="w-3/6">
            <div className="flex flex-col align-top">
              <div>
              Tool for data scientists and engineers for <span className="text-purple-700 whitespace-nowrap">querying</span> data and facilitating other tasks like <span className="text-purple-700 whitespace-nowrap">graph</span> integration, in-app <span className="text-purple-700 whitespace-nowrap">sharing</span>, etc.
              <br/>Reference: 28somyasinghal@gmail.com
              </div>
              <div>
                <ul className="list-disc flex flex-row">
                  <li className="mx-4 font-sans font-thin text-zinc-900">MERN</li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b'>
          <td className="align-top w-3/6 font-medium text-lg px-8">
            Gym <span className="text-2xl font-semibold whitespace-nowrap">Management</span> System
            <div className="text-xs">
            SEP '19 - NOV '19</div>
          </td>
          <td className="w-3/6">
            <div className="flex flex-col align-top">
              <div>
              Manage the <span className="text-purple-700 whitespace-nowrap">gym</span> schedule and activities of client,trainer and gym <span className="text-purple-700 whitespace-nowrap">admin</span>.
              </div>
              <div>
                <ul className="list-disc flex flex-row">
                  <li className="mx-4 font-sans font-thin text-zinc-900">HTML</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">CSS</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">Javascript</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">PHP</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">MySQL</li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b'>
          <td className="align-top w-3/6 font-medium text-lg px-8">
            Virtual <span className="text-2xl font-semibold whitespace-nowrap">M</span>ouse
            <div className="text-xs">
            OCT '19 - DEC '19</div>
          </td>
          <td className="w-3/6">
            <div className="flex flex-col align-top">
              <div>
              Modifies the linux <span className="text-purple-700 whitespace-nowrap">kernel</span> to support a virtual mouse interface which can be reached over Wi-Fi via <span className="text-purple-700 whitespace-nowrap">phone</span> browser and can <span className="text-purple-700 whitespace-nowrap">simulate</span> mouse movements and clicks.
              </div>
              <div>
                <ul className="list-disc flex flex-row">
                  <li className="mx-4 font-sans font-thin text-zinc-900">BASH</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">Javascript</li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
        <tr className='border-b'>
          <td className="align-top w-3/6 font-medium text-lg px-8">
            de<span className="text-xl font-semibold whitespace-nowrap">Kart</span>
            <div className="text-xs">
            JUL '21 - SEP '21</div>
          </td>
          <td className="w-3/6">
            <div className="flex flex-col align-top">
              <div>
              <span className="text-purple-700 whitespace-nowrap">Shopping</span> site to get stuff, add to <span className="text-purple-700 whitespace-nowrap">cart</span> and checkout.
              </div>
              <div>
                <ul className="list-disc flex flex-row">
                  <li className="mx-4 font-sans font-thin text-zinc-900">Java</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">J2EE</li>
                  <li className="mx-4 font-sans font-thin text-zinc-900">MySQL</li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className='align-middle text-center w-full items-center py-4' colSpan={2}>
          <span className='text-blue-700'><a href='https://github.com/lahuer99?tab=repositories' target='_blank'>Click for more...</a></span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Projects