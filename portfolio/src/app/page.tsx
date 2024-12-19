
export default function Home() {
  return (
    <div className="grow p-4 flex flex-col min-h-full text-center">
      <div className="text-center flex flex-col items-center justify-center grow">
        <h1 className="mb-2">I am</h1>
        <div className="relative w-[250px] h-[80px]">
          <img className="defaultIMG" src="/veeraDefault.png" alt="Veera" />
          <img className="pinkIMG max-w-sm" src="/veeraDark.png" alt="Veera" />
        </div>
        <h1 className="my-2">PYLKKÄNEN</h1>
        <h3 className="gradient-text">Full Stack Developer studying at kood/Sisu</h3>

        <div className="text-sm mt-4">
          <h3 className="mb-2">Interested in everything code related, but especially:</h3>
          <ul>
            <li>Frontend development</li>
            <li>Devops and automation</li>
            <li>Testing</li>
          </ul>
        </div>


        <div className="relative w-[250px] h-[250px]">
          <img className="defaultBG" src="/defaultHome.jpeg" alt="super professional computer" />
          <img className="pinkBG" src="/monster.png" alt="monster says hi" />
        </div>
      </div>


      <div className="mt-auto">
        <p className="text-xs text-slate-400">
        Icons by
        <a target="_blank" href="https://icons8.com"> Icons8</a>
        </p>
        <p className="text-xs text-slate-400">
          <a target="_blank" href="http://www.freepik.com">Blue background image designed by rawpixel.com / Freepik</a>
        </p>
      </div>

    </div>
  );
}
