interface FooterProps {
  isSticky: boolean;
}
// export default function Footer({ isSticky }) {
//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="max-w-sm mx-auto flex justify-center">
//       <p
//         className={`absolute ${
//           isSticky ? "sticky mt-4 bottom-4" : "static bottom-4"
//         }  text-xs`}
//       >
//         Copyright ©️ {currentYear} Created by{" "}
//         <span className="font-bold">
//           <a href="https://bio.agengari.my.id/">RedCode Team & Mr. Tuấn</a>
//         </span>
//       </p>
//     </div>
//   );
// }
const Footer: React.FC<FooterProps> = ({ isSticky }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="max-w-sm mx-auto flex justify-center"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
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
};

export default Footer;
