import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiNodeDotJs,
  SiSass,     
  SiWebpack,   
} from "react-icons/si";

function TechIcons() {
  return (
    <div className="flex items-center justify-center">
      <SiHtml5 className="mr-8 text-6xl icon html" />
      <SiCss3 className="mr-8 text-6xl icon css" />
      <SiJavascript className="mr-8 text-6xl icon javascript" />
      <SiReact className="mr-8 text-6xl icon react" />
      <SiTypescript className="mr-8 text-6xl icon typescript" />
      <SiTailwindcss className="mr-8 text-6xl icon tailwind" />
      <SiMongodb className="mr-8 text-6xl icon mongodb" />
      <SiGit className="mr-8 text-6xl icon git" />
      <SiNodeDotJs className="mr-8 text-6xl icon nodejs" />
      <SiSass className="mr-8 text-6xl icon sass" />            
      <SiWebpack className="mr-8 text-6xl icon webpack" />     
    </div>
  );
}

export default TechIcons;
