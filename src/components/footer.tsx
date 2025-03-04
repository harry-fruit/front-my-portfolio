import style from "@/styles/components/footer.module.scss";
import { Link } from "@/navigation";
import { LinkedinIcon } from "@/components/ui/custom/icons/linkedin-icon";
import { GithubIcon } from "@/components/ui/custom/icons/github-icon";
import { WhatsappIcon } from "@/components/ui/custom/icons/whatsapp-icon";
import { useTranslations } from "next-intl";

// TODO: Translate titles
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("footer");
  return (
    <footer id="footer" className={style.footer}>
      <div
        id="social-media"
        className="flex flex-row items-center justify-center gap-5 md:gap-10 xl:gap-8"
      >
        <Link
          href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
          title="My LinkedIn Profile"
          target="_blank"
        >
          <LinkedinIcon
            width="40"
            height="40"
            className="text-gray-200 hover:text-gray-50"
          />
        </Link>
        <Link
          href={"https://github.com/harry-fruit"}
          title="My Github Profile"
          target="_blank"
        >
          <GithubIcon width="40" height="40" className="text-gray-200" />
        </Link>
        <Link href={t("whatsappLink")} title="Whatsapp" target="_blank">
          <WhatsappIcon width="40" height="40" className="text-gray-200" />
        </Link>
      </div>
      <p className="text-center px-8 text-gray-200 font-medium">
        Copyright &copy; {currentYear} Isaque Duarte
      </p>
    </footer>
  );
};
