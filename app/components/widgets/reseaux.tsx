"use client";
// pages/users.tsx
import useAxios from "@/app/lib/helpers/use-axios";
import { reseauxProps } from "@/app/lib/interfaces/interfaces";
import { EmailIcon } from "@/app/lib/svg/reseaux/email";
import { FacebookIcon } from "@/app/lib/svg/reseaux/facebook";
import { MessengerIcon } from "@/app/lib/svg/reseaux/messenger";
import { InstagramIcon } from "@/app/lib/svg/reseaux/instagram";
import { HomeIndicatorIcon } from "@/app/lib/svg/reseaux/home-indicator";
import Link from "next/link";
import Loader from "../loader/loader";

const Reseaux = ({
  slug,
  classname,
  homeIcon,
  colorIcon,
  widthIcon,
  heightIcon,
}: reseauxProps) => {
  //use the useAxios hook and pass the AxiosRequestConfig
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: "/socials",
    headers: {
      accept: "application/ld+json",
    },
  });
  return (
    <div className={classname} id="reseaux">
      <div className="flex w-full justify-around items-center">
        {loading && <Loader color={"#000707"} width={"53"} height={"45px"} />}
        {error && <p>{error.message}</p>}
        {!loading &&
          !error &&
          response?.data["hydra:member"].map((val: any) => {
            return slug.map((valSlug: string) => {
              if (val.slug == valSlug) {
                return (
                  <Link
                    target="_blank"
                    href={val.link}
                    className="svg-reseaux-mobile"
                    key={val.id}
                  >
                    {val.slug === "facebook" && (
                      <FacebookIcon
                        color={colorIcon}
                        width={widthIcon}
                        height={heightIcon}
                      />
                    )}
                    {val.slug === "email" && (
                      <EmailIcon
                        color={colorIcon}
                        width={widthIcon}
                        height={heightIcon}
                      />
                    )}
                    {val.slug === "messenger" && (
                      <MessengerIcon
                        color={colorIcon}
                        width={widthIcon}
                        height={heightIcon}
                      />
                    )}
                    {val.slug === "instagram" && (
                      <InstagramIcon
                        color={colorIcon}
                        width={widthIcon}
                        height={heightIcon}
                      />
                    )}
                  </Link>
                );
              }
            });
          })}
      </div>
      {homeIcon && (
        <div className="basis-full bottom-0">
          <HomeIndicatorIcon />
        </div>
      )}
    </div>
  );
};

export default Reseaux;
