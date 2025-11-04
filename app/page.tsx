import NavBar from "../components/NavBar";
import { HeroSection } from "@/components/sections/Hero";
import AboutSection from "../components/sections/About";
import { ConceptSection, ConceptSkeleton } from "@/components/sections/Concept";
import PricingSection from "../components/sections/Pricing";
import TestimonialsSection from "../components/sections/Testimonials";
import Footer from "../components/Footer";
import type { Content, ImageResource } from "../types/content";
import { AsyncFolder } from "@/components/sections/AsyncFolder";
import {
  RecentWorkSection,
  RecentWorkSkeleton,
} from "@/components/sections/RecentWork";

// Minimal mock content to render UI only
const content: Content = {
  hero: {
    image: {
      public_id: "TIS2910_84_ghwgv1",
      version: 1761743548,
    } as ImageResource,
    title: "Tis Studio - Bắt trọn khoảnh khắc & Ghi dấu trọn đời",
    subtitle:
      "Ghi lại những khoảnh khắc của con bằng hình ảnh nhẹ nhàng - tinh tế - cảm xúc. <br/> Những bức ảnh kỷ vật của những ngày đầu đời.",
    cta1: "Đặt lịch chụp",
    cta2: "Xem bộ sưu tập",
  },
  about: {
    title: "Giới thiệu về Tis Studio",
    subtitle: "→ 🌿 Tis Studio - Since 2019<br/>Nơi lưu giữ những khoảnh khắc đầu đời tinh khôi của bé & gia đình, với phong cách tự nhiên, nhẹ nhàng và nghệ thuật.<br/>Chúng tôi tin rằng, mỗi bức ảnh không chỉ là hình ảnh, mà là ký ức đầu tiên của con – món quà vô giá dành cho ba mẹ.",
    features: [
      {
        title: "Không gian nhẹ nhàng, theo nhịp của bé",
        text: "Mọi buổi chụp đều diễn ra chậm rãi, ưu tiên sự thoải mái của bé. Có thời gian cho bú, thay tã và ôm ấp, để từng khoảnh khắc đều tự nhiên.",
        image: {
          public_id: "TIS2910_49_ljnini",
          version: 1761743548,
        } as ImageResource,
      },
      {
        title: " An toàn của bé luôn là ưu tiên hàng đầu",
        text: "Kỹ thuât tạo dáng bé được thực hiện chuyên nghiệp & bé luôn được theo dõi trong suốt buổi chụp. Thiết bị,ánh sáng phù hợp trong lĩnh vực chụp ảnh bé sơ sinh, <br/>Đạo cụ sạch sẽ, mềm mại, đã được khử khuẩn và thân thiện với làn da bé.<br/>Stylist luôn giữ vệ sinh và xịt khuẩn trước và trong suốt buổi chụp",
        image: {
          public_id: "TIS2910_90_pgune6",
          version: 1761743548,
        } as ImageResource,
      },
      {
        title: "Cả gia đình cùng tham gia",
        text: "Tis khuyến khích bố mẹ và anh chị cùng vào khung hình. Những cái ôm, ánh nhìn tự nhiên sẽ là kỷ vật vô giá của gia đình.",
        image: {
          public_id: "TIS2910_56_od41ho",
          version: 1761743548,
        } as ImageResource,
      },
    ],
  },
  recentWork: {
    folder: "DU_AN_GAN_DAY",
    title: "Hình ảnh những thiên thần gần đây",
    subtitle: "Những khoảnh khắc đáng yêu của bé được lưu lại tự nhiên & tinh tế.",
    images: [],
  },
  concept: {
    folder: "CONCEPT",
    title: "Concept tham khảo",
    subtitle: "Concept mẫu để ba mẹ chọn & cảm nhận phong cách chụp.",
    cover: {
      public_id: "bia_concept_t5nauf",
      version: 1761743548,
    } as ImageResource,
    gallery: [],
  },
  pricing: {
    title: "Báo giá",
    subtitle: "Chọn gói chụp phù hợp với gia đình - Phần Còn lại ba mẹ hãy để Tis giúp ba mẹ thực hiện một cách hoàn chỉnh chu và đáng giá nhất..",
    tiers: [
      {
        name: "Gói Matenity",
        folder: "BAO_GIA_MATENITY",
        images: [],
      },
      {
        name: "Gói Newborn",
        folder: "BAO_GIA_NEWBORN",
        highlight: true,
        images: [],
      },
      {
        name: "Gói Baby",
        folder: "BAO_GIA_BABY",
        images: [],
      },
    ],
  },
  testimonials: {
    title: "Cảm nhận khách hàng",
    subtitle: "Những lời chia sẻ chân thật từ các ba mẹ tin tưởng chọn Tis đồng hành cùng gia đình",
    reviews: [
      {
        name: "Minh Trang - Bé Cá",
        text: "Cám ơn chú Nam đã giúp mẹ con Cá lưu lại những khoảnh khắc đẹp của con. <br/>Rất chuyên nghiệp và có tâm.",
        avatar: {
          public_id: "492888485_2439085526446488_6720759110884660422_n_xdroet",
          version: 1761910643,
        } as ImageResource,
      },
      {
        name: "An Nguyên",
        text: "Chú Nam nhiệt tình, hình ra rất đẹp. 5 sao điểm chất lượng 🥰",
        avatar: {
          public_id: "489839744_3627378297396354_6291364988385744827_n_x1kf4v",
          version: 1761910645,
        } as ImageResource,
      },
      {
        name: "Nguyễn Thụy Mỹ Phương",
        text: "Cám ơn chú Nam đã nhiệt tình cho ra bộ hình quá tuyệt vời cho 2 cháu 🙂",
        avatar: {
          public_id: "565163485_10237176613656447_9022401418679398244_n_dsobb5",
          version: 1761910551,
        } as ImageResource,
      },
    ],
  },
  contact: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    email: "hello@example.com",
    phone: "0933181285",
    phoneDisplay: "0933 181 285",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <HeroSection content={content.hero} contact={content.contact} />
      <AsyncFolder
        folder={content.recentWork.folder}
        fallback={<RecentWorkSkeleton />}
      >
        {(resources) => (
          <RecentWorkSection
            content={{ ...content.recentWork, images: resources }}
          />
        )}
      </AsyncFolder>
      <AboutSection content={content.about} />
      <AsyncFolder
        folder={content.concept.folder}
        fallback={<ConceptSkeleton />}
      >
        {(resources) => (
          <ConceptSection
            content={{ ...content.concept, gallery: resources }}
          />
        )}
      </AsyncFolder>
      <AsyncFolder
        folder={content.pricing.tiers.map((t) => t.folder)}
        fallback={null}
      >
        {(resources) => (
          <PricingSection
            content={{
              ...content.pricing,
              tiers: content.pricing.tiers.map((tier) => ({
                ...tier,
                images: resources[tier.folder] || [],
              })),
            }}
            contact={content.contact}
          />
        )}
      </AsyncFolder>
      <TestimonialsSection content={content.testimonials} />
      <Footer contact={content.contact} />
    </main>
  );
}
