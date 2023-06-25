import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { MDXFrontMatter } from "@/lib/types";
import {Page} from "@/components/Page";
import {Section} from "@/components/Section";
import {Background} from "@/components/Background";
import {Hero} from "@/components/Hero";
import {cx} from "@/lib/utils";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}


type VerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: VerticalFeatureRowProps) => {
  const verticalFeatureClass = cx([
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  ]);

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page>
        <Background color="bg-gray-100">
          <Hero />
        </Background>
        <Section
          title="What we do"
          description="We provide a wide range of services around web design, web development, E-commerce development, digital/Internet marketing, and SEO services."
        >
          <VerticalFeatureRow
            title="Website design and development"
            description="We Offer tailor-made website design and development services to clients who want unique and visually appealing websites that align with their branding and objectives. Focus on creating responsive designs that provide an optimal user experience across devices."
            image="/images/feature5.svg"
            imageAlt="Website design and development"
          />
          <VerticalFeatureRow
            title="Mobile App Development"
            description="Expand your services to include mobile app development for iOS and Android platforms. Many businesses are looking to have a mobile presence, and your web development expertise can be leveraged in this area."
            image="/images/feature4.svg"
            imageAlt="Mobile App Development"
            reverse
          />
          <VerticalFeatureRow
            title="Maintenance Services"
            description="We Offer ongoing maintenance and support services to clients who need regular updates, security checks, and bug fixes for their websites."
            image="/images/feature.svg"
            imageAlt="Maintenance Services"
          />
          <VerticalFeatureRow
            title="E-commerce Solutions"
            description="Develop and customize e-commerce websites for small and large businesses, including features like shopping carts, payment gateways, inventory management, and order processing."
            image="/images/feature2.svg"
            imageAlt="E-commerce Solutions"
            reverse
          />
          <VerticalFeatureRow
            title="SEO and Digital Marketing Services"
            description="We Help clients improve their online visibility and attract more traffic through search engine optimization (SEO) techniques, keyword research, content strategy, and digital marketing campaigns."
            image="/images/feature3.svg"
            imageAlt="SEO and Digital Marketing Services"
          />
        </Section>
      </Page>
    </>
  );
};

export default Home;
