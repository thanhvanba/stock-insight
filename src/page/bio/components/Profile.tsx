import { VscVerifiedFilled } from "react-icons/vsc";

export default function Profile() {
  return (
    <>
      <div className="grid max-w-sm gap-2 mx-auto -mt-16 text-center">
        <section className="grid justify-center">
          <img
            src="../../../assets/images/20250801-105915_1864x.jpg"
            alt="Foto Profil"
            className="rounded-full h-28"
          />
        </section>
        <section className="mx-auto align-middle">
          <p
            className="flex mt-4 text-xl font-bold text-slate-900 dark:text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Mr. Tuấn - Kỹ sư đầu tư{" "}
            <span className="pl-2 text-2xl text-blue-700">
              <VscVerifiedFilled />
            </span>
          </p>
        </section>
        <section className="text-sm">
          <p className="" data-aos="fade-right" data-aos-duration="1000">
            Ra khơi 📌 và cùng nhau về bờ
          </p>
          <p data-aos="fade-right" data-aos-duration="1000">
            Tham gia để được Tuấn tư vấn nhé.{" "}
          </p>
        </section>
        <section className=""></section>
      </div>
    </>
  );
}
