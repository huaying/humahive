import Link from "next/link";
import styles from "./page.module.css";
import VideoCard from "@/components/VideoCard";
import { communityVideo, yvonneVideo } from "@/data/videos";
import { donationUrl } from "@/data/links";
import Image from "next/image";
import { Heart, Globe, MapPin, Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4 items-center  md:min-h-0">
            {/* Left: Text Content */}
            <div className="space-y-8 md:pr-4 lg:pr-8">
              {/* Location Badge */}
              <div className="badge">
                <MapPin size={16} className="mr-2" />
                Kakuma Refugee Camp, Kenya
              </div>

              {/* Main Title */}
              <h1 className="display-1">
                Education,
                <br />
                opportunity,
                <br />
                and hope in <span className={styles.heroAccent}>Kakuma.</span>
              </h1>

              <p className="body-xl max-w-lg">
                Together with refugee and host communities, we create
                opportunities to learn, build livelihoods, and shape a future
                with dignity.
              </p>
            </div>

            {/* Right: Photo Gallery */}
            <div className="relative">
              {/* Main large image */}
              <div className="w-full aspect-[20/9] media-rounded relative">
                <Image
                  src="/images/gallery/campaign-group-01.jpg"
                  alt="Community members campaigning together against child marriage"
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom two smaller images */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="w-full aspect-[20/9] media-rounded relative">
                  <Image
                    src="/images/gallery/school-community-01.jpg"
                    alt="Schoolchildren gathered in front of a HumAhive banner"
                    sizes="(max-width: 767px) 50vw, 25vw"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full aspect-[20/9] media-rounded relative">
                  <Image
                    src="/images/gallery/campaign-participant-02.jpg"
                    alt="A young participant displaying a campaign marker"
                    sizes="(max-width: 767px) 50vw, 25vw"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating accent element */}
              <div
                className="absolute -bottom-3 left-6 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-background-emphasis)" }}
              >
                <Heart
                  size={16}
                  style={{
                    color: "var(--color-primary)",
                    fill: "var(--color-primary)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction and Community Video */}
      <section
        id="community-voices"
        className="section bg-soft"
        aria-labelledby="who-we-are-title"
      >
        <div className={`container ${styles.introduction}`}>
          <div className={styles.introductionText}>
            <h2 id="who-we-are-title" className="display-2">
              Who We Are
            </h2>
            <p className="body-lg">
              HumAhive is a nonprofit organization based in Kakuma Refugee Camp,
              Kenya. Through education, livelihood training, and social support,
              we help children, women, and vulnerable community members build
              self-reliant lives.
            </p>
            <p className={`body-lg ${styles.introductionMessage}`}>
              A safe childhood. The chance to learn. A future with dignity.
            </p>
          </div>
          <div className={styles.communityFilm}>
            <h3 className="heading-2">
              Peace is a paradise
            </h3>
            <VideoCard video={communityVideo} showCaption={false} />
            <p className="body-base">
              Hear from our founder, Tangi Jerome, and community members about
              the hopes behind HumAhive&apos;s work in Kakuma.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section bg-soft">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="display-2 mb-8">Our Programs</h2>
            <p className="body-xl max-w-3xl mx-auto">
              We run five core programs that focus on education, women&apos;s
              empowerment, child protection, disability inclusion, and
              environmental conservation.
            </p>
          </div>

          <div className="grid grid-auto-fit gap-12 mt-8">
            {[
              {
                title: "Education for Children (Ages 3–17)",
                description:
                  "Quality education for refugee and host community children, focusing on literacy, numeracy, creativity, and innovation. Our approach builds children's confidence and prepares them for future opportunities.",
                participants: "300+ children annually",
                image: "kids8-11-04.jpg",
              },
              {
                title: "Women's Livelihood Training (Ages 18–35)",
                description:
                  "Through our HumAhive Curriculum, we train young women in entrepreneurship, financial literacy, and vocational skills, empowering them to start and grow their own businesses. Graduates receive certificates of completion.",
                participants: "Young women trained",
                image: "business-02.jpg",
              },
              {
                title: "Early Child Marriage Prevention Project",
                description:
                  "We work with girls aged 12–17 to raise awareness about the dangers of early marriage, encourage them to stay in school, and support their aspirations for future careers.",
                participants: "Girls aged 12-17",
                image: "early-marriage-02.jpg",
              },
              {
                title: "Support for Disabilities, Widows & Orphans",
                description:
                  "We provide training, counseling, and community support to make sure that no one is left behind, regardless of their physical or social circumstances.",
                participants: "Community members supported",
                image: "eyeexam-01.jpg",
              },
              {
                title: "Environmental Conservation – Tree Planting",
                description:
                  "Each year, we plant at least 50 trees in schools, churches, mosques, and community spaces to promote a greener, healthier environment.",
                participants: "50+ trees planted annually",
                image: "humahive-14.jpg",
              },
            ].map((program, index) => {
              return (
                <div key={index} className="space-y-6">
                  <div className="image-card media-rounded relative">
                    <Image
                      src={`/images/${program.image}`}
                      alt={program.title}
                      width={400}
                      height={240}
                      className="w-full h-60 object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="heading-3 mb-4">{program.title}</h3>
                    <p className="body-base mb-4">{program.description}</p>

                    <div>
                      <span className="body-base font-medium text-primary">
                        {program.participants}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <h2 className="display-2">About HumAhive</h2>

              <p className="body-lg">
                Founded by community members who have experienced the challenges
                of displacement firsthand, HumAhive was created to respond to
                the urgent needs of marginalized people in Kakuma Refugee Camp.
                We are driven by the belief that lasting change begins with
                education, skills, and dignity.
              </p>

              <div className="mission-card p-8">
                <div className="flex items-center mb-4 gap-2">
                  <Heart size={32} style={{ color: "var(--color-primary)" }} />
                  <h3 className="heading-3">Our Mission</h3>
                </div>
                <p className="body-base">
                  To empower vulnerable individuals in refugee and marginalized
                  communities by providing access to education, livelihood
                  opportunities, and holistic support, enabling them to live
                  self-reliant and dignified lives.
                </p>
              </div>

              <div className="mission-card p-8">
                <div className="flex items-center mb-4 gap-2">
                  <Globe size={32} style={{ color: "var(--color-primary)" }} />
                  <h3 className="heading-3">Our Vision</h3>
                </div>
                <p className="body-base">
                  A future where all people — regardless of their circumstances
                  — have the opportunity to learn, grow, and contribute
                  positively to their communities.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="space-y-8">
              <div className="w-full h-80 media-rounded relative">
                <Image
                  src="/images/volunteers-01.jpg"
                  alt="Our Community - Lives Impacted"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1">
                <div className="text-center p-6">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: "var(--color-primary-text)" }}
                  >
                    750+
                  </div>
                  <p className="body-xl">Lives Impacted</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-center p-4">
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "var(--color-primary-text)" }}
                    >
                      300+
                    </div>
                    <p className="body-base">Children Educated</p>
                  </div>
                  <div className="text-center p-4">
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "var(--color-primary-text)" }}
                    >
                      450+
                    </div>
                    <p className="body-base">People Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section bg-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-8">Our Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  ></div>

                  <div className="body-lg">
                    <strong>Educated over 300 children annually</strong> from
                    diverse backgrounds.
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  ></div>
                  <p className="body-lg">
                    <strong>Provided livelihood training to 250 women</strong>{" "}
                    in Kakuma.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  ></div>
                  <p className="body-lg">
                    <strong>
                      Successfully implemented early marriage prevention
                      awareness sessions
                    </strong>{" "}
                    for teenage girls.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  ></div>
                  <p className="body-lg">
                    <strong>Planted over 90 trees</strong> in schools, churches,
                    and community areas since inception.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  ></div>
                  <p className="body-lg">
                    <strong>Built strong partnerships</strong> with local
                    leaders, faith organizations, NGOs, and community groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-8">Testimonials</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Testimonial 1 */}
              <div
                className="p-8 quote-card relative"
                style={{ backgroundColor: "var(--color-background-soft)" }}
              >
                <div
                  className="absolute top-6 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <span aria-hidden="true" className="text-on-primary text-2xl font-bold">&quot;</span>
                </div>

                <div className="pt-10">
                  <p className="body-lg mb-2 leading-relaxed">
                    HumAhive has given my daughter the confidence to stay in
                    school and dream of becoming a teacher.
                  </p>

                  <div>
                    <p className="body-sm font-semibold">
                      Beneficiary&apos;s Parent
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div
                className="p-8 quote-card relative"
                style={{ backgroundColor: "var(--color-background-emphasis)" }}
              >
                <div
                  className="absolute top-6 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <span aria-hidden="true" className="text-on-primary text-2xl font-bold">&quot;</span>
                </div>

                <div className="pt-10">
                  <p
                    className="body-lg mb-2 leading-relaxed"
                    style={{ color: "var(--color-primary-text)" }}
                  >
                    The training I received helped me start a small business and
                    support my family.
                  </p>

                  <div>
                    <p
                      className="body-sm font-semibold"
                      style={{ color: "var(--color-primary-text)" }}
                    >
                      Women&apos;s Livelihood Program Graduate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Story and Get Involved */}
      <section
        id="get-involved"
        className="section bg-soft"
        aria-labelledby="get-involved-title"
      >
        <div className="container">
          <header className={styles.involvementHeader}>
            <p className={styles.involvementLabel}>Get Involved</p>
            <h2 id="get-involved-title" className="display-2">
              Together, We Build Futures
            </h2>
          </header>

          <div className={styles.involvementStory}>
            <div className={styles.involvementFilm}>
              <h3 className="heading-2">Meet Yvonne</h3>
              <VideoCard video={yvonneVideo} showCaption={false} />
              <p className="body-base">
                Hear Yvonne speak in English about mentoring other women and
                her hopes for the future.
              </p>
              <Link href="/gallery" className={`text-link ${styles.involvementLink}`}>
                <Camera size={18} aria-hidden="true" />
                More stories from our community
              </Link>
            </div>

            <div className={styles.involvementAppeal}>
              <h3 className="heading-2">Support English learning in Kakuma</h3>
              <p className="body-lg">
                Help volunteer English teachers provide women in Kakuma with
                opportunities to learn, build confidence, and connect with others.
              </p>
              <p className="body-base">
                The GoFundMe campaign helps provide classroom essentials such as
                notebooks, pens, chalk, and blackboards.
              </p>
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate on GoFundMe (opens in a new tab)"
                className={"btn btn-primary " + styles.donationButton}
              >
                Donate on GoFundMe
              </a>
              <p className="body-sm">View the campaign and donate on GoFundMe.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
