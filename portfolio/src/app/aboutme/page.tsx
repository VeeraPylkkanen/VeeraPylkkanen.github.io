import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="mt-2 lg:mt-0 lg:ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">

      <div className="shadow-md dark:shadow-none sm:col-span-2 lg:col-span-4 bg-BG3 p-4 text-center dark:p-3 rounded dark:rounded-xl dark:border-4 border-primaryAccent dark:border-dashed transition-colors duration-500">
        <h2 className="font-bold text-xl leading-tight">
          From Daycare to Developement
        </h2>
        <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
        <h3 className="text-sm">
          Learning, Creating and Turning Ideas into Code
        </h3>
      </div>

      <div className="text-xs md:text-sm shadow-md dark:shadow-none lg:col-span-2 bg-BG2 py-4 pr-4 rounded dark:rounded-xl">
        <div className="relative mx-auto mb-2 w-[80px] h-[80px]">
          <img src="/aboutme/Info.png" alt="Info" className="defaultIMG" />
          <img src="/aboutme/InfoPink.png" alt="Info" className="pinkIMG" />
        </div>
        <table className="mx-auto border-collapse table-fixed w-full mb-2">
          <tbody>
            <tr>
              <td className="w-1/2 pr-2 font-bold text-right border-r-2 border-black">Name</td>
              <td className="w-1/2 pl-2">Veera Pylkkänen</td>
            </tr>
            <tr>
              <td className="w-1/2 pr-2 font-bold text-right border-r-2 border-black">Title</td>
              <td className="w-1/2 pl-2">Full-Stack Developer</td>
            </tr>
            <tr>
              <td className="w-1/2 pr-2 font-bold text-right border-r-2 border-black">Experience level</td>
              <td className="pl-2">Intern / Junior</td>
            </tr>
            <tr>
              <td className="w-1/2 pr-2 font-bold text-right border-r-2 border-black">Location</td>
              <td className="w-1/2 pl-2">Jyväskylä, Finland</td>
            </tr>
            <tr>
              <td className="w-1/2 pr-2 font-bold text-right border-r-2 border-black">Fluent in</td>
              <td className="w-1/2 pl-2">Finnish, English</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lg:col-span-2 bg-primaryBG dark:bg-gradient-to-r from-secondaryAccent to-primaryBG p-4 shadow-md dark:shadow-none rounded dark:rounded-xl">
        <div className="relative mx-auto mb-2 w-[80px] h-[80px]">
          <img src="/aboutme/TechnicalSkills.png" alt="Technical Skills" className="defaultIMG" />
          <img src="/aboutme/TechnicalSkillsPink.png" alt="Technical Skills" className="pinkIMG" />
        </div>
        <h2 className="text-center text-sm">See my techincal skills in the porfolio:</h2>
        <Link href="/portfolio">
          <Image src="/icons/Portfolio.png" alt="Portfolio" width={50} height={50} className="mx-auto my-2 hover:bg-white p-1.5 rounded-md transition duration-300 ease-in-out"/>
        </Link>
      </div>

      <div className="sm:col-span-2 lg:col-span-4 bg-BG2 p-4 shadow-md dark:shadow-none rounded dark:rounded-xl">
        <div className="relative mx-auto mb-2 w-[80px] h-[80px]">
          <img src="/aboutme/SoftSkills.png" alt="Soft" className="defaultIMG" />
          <img src="/aboutme/SoftSkillsPink.png" alt="Soft" className="pinkIMG" />
        </div>
        <ul className="text-sm text-center space-y-1 mb-2">
          <li className="bg-white rounded p-1">
            Leading a team with empathy
          </li>
          <li>
            Passion in mentoring and helping others
          </li>
          <li className="bg-white rounded p-1">
            Successing with great time management
          </li>
          <li>
            Known to give meaningful and encouraging feedback
          </li>
          <li className="bg-white rounded p-1">
            Always eager to learn new things
          </li>
        </ul>
      </div>

      <div className="sm:col-span-2 lg:col-span-3 bg-BG3 dark:bg-gradient-to-r from-primaryBG to-BG3 p-4 shadow-md dark:shadow-none rounded dark:rounded-xl text-sm text-center">
        <div className="relative mx-auto mb-2 w-[80px] h-[80px]">
          <img src="/aboutme/Education.png" alt="Education" className="defaultIMG" />
          <img src="/aboutme/EducationPink.png" alt="Education" className="pinkIMG" />
        </div>
        <ul>
          <li className="border-solid border-2 border-primaryAccent rounded bg-primaryBG dark:bg-BG3 p-2 mb-2">
            <h2 className="text-base font-bold">Full-Stack Developer</h2>
            <p>kood/Sisu</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p className="mb-2 mt-1 text-xs">2024 →</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <Link href="/portfolio">
              <Image src="/icons/kood.png" alt="kood/Sisu" width={50} height={50} className="mx-auto my-1 hover:bg-white p-1.5 rounded-md transition duration-300 ease-in-out"/>
            </Link>
          </li>
          <li className="border-solid border-2 border-primaryAccent rounded bg-primaryBG dark:bg-BG3 p-2">
            <h2 className=" text-base font-bold">Master of Education</h2>
            <p>University of Jyväskylä</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p className="text-xs my-1">2015-2018</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p>Major: Early Childhood Education</p>
            <p>Minor: Psychology</p>
          </li>
        </ul>
      </div>

      <div className="bg-BG2 p-4 shadow-md dark:shadow-none rounded dark:rounded-xl text-sm"></div>
      <div className="bg-BG2 p-4 shadow-md dark:shadow-none rounded dark:rounded-xl text-sm"></div>

      <div className="sm:col-span-2 lg:col-span-3 bg-BG2 p-4 shadow-md dark:shadow-none rounded dark:rounded-xl text-sm">
        <div className="relative mx-auto mb-2 w-[80px] h-[80px]">
          <img src="/aboutme/Work.png" alt="Work" className="defaultIMG" />
          <img src="/aboutme/WorkPink.png" alt="Work" className="pinkIMG" />
        </div>
        <ul className="text-center">
          <li className="border-solid border-2 border-primaryAccent rounded bg-primaryBG dark:bg-BG3 p-2 mb-2">
            <h2 className="text-base font-bold">Teacher in Early Childhood Eductaion</h2>
            <p>City of Jyväskylä</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p className="text-xs my-1">Full-time <br />2018-2024 <br />6 years 3 months</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p>Team leader</p>
          </li>
          <li className="border-solid border-2 border-primaryAccent rounded bg-primaryBG dark:bg-BG3 p-2 mb-2">
            <h2 className="text-base font-bold">Cashier</h2>
            <p>J. Kaurila Oy / K-Rauta Palokka</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p className="text-xs my-1">Part-time<br />2014-2017<br />3 years 6 months</p>
            <div className="h-0.5 w-12 bg-primaryAccent mx-auto my-2"></div>
            <p>Cash register, Cafeteria and Customer service</p>
          </li>
        </ul>


      </div>

    </div>
  );
}