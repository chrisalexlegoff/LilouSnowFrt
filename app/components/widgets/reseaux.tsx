// 'use client'
// pages/users.tsx
import useAxios from "@/app/lib/helpers/use-axios";
import { reseauxProps } from "@/app/lib/interfaces/interfaces";
import { EmailIcon } from "@/app/lib/svg/email";
import { FacebookIcon } from "@/app/lib/svg/facebook";
import { MessengerIcon } from "@/app/lib/svg/messenger";
import { InstagramIcon } from "@/app/lib/svg/instagram";
import { HomeIndicatorIcon } from "@/app/lib/svg/home-indicator";

interface ReseauxResponse {
  Reseaux: reseauxProps[];
  total: number;
  skip: number;
  limit: number;
}

const Reseaux =({ slug, classname }: reseauxProps) => {
  //use the useAxios hook and pass the AxiosRequestConfig
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: '/socials',
    headers: {
      accept: 'application/ld+json'
    }
  });
  console.log(response?.data['hydra:member'])
  return (
    <><div className={classname} id='reseaux'>
      {loading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>{error.message}</p>
      )}
      {!loading && !error && (
         response?.data['hydra:member'].map((val: any) => {
              return slug.map((valSlug: string) => {
                if (val.slug == valSlug) {
                  return (
                    <a 
                      target="_blank"
                      href={val.link}
                      className="svg-reseaux-mobile z-20"
                      key={val.id}
                    >
                    {val.slug === 'facebook' && <FacebookIcon/>}
                    {val.slug === 'email' && <EmailIcon/>}
                    {val.slug === 'messenger' && <MessengerIcon/>}
                    {val.slug === 'instagram' && <InstagramIcon/>}
                    </a>
                  );
                }
              });
            })
      )}
      <HomeIndicatorIcon/>
    </div></>
  );
};

export default Reseaux;
