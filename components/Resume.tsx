import Link from "next/link";

const Resume = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h1>My resume</h1>
      <a href="/Resume.docx" download className="cursor-pointer">
        <span>Documentni yuklab olish</span>
      </a>
    </div>
  );
};

export default Resume;
