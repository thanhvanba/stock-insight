export default function Footer({ isSticky }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-sm mx-auto flex justify-center">
      <p
        className={`absolute ${
          isSticky ? "sticky mt-4 bottom-4" : "static bottom-4"
        }  text-xs`}
      >
        Copyright ©️ {currentYear} Created by{" "}
        <span className="font-bold">
          <a href="https://bio.agengari.my.id/">RedCode Team & Mr. Tuấn</a>
        </span>
      </p>
    </div>
  );
}
