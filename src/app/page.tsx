import Link from "next/link";
import styles from "./page.module.css";
import VideoCard from "@/components/VideoCard";
import { communityVideo, yvonneVideo } from "@/data/videos";
import { donationUrl } from "@/data/links";
import Image from "next/image";
import { Heart, MapPin, Camera } from "lucide-react";

const programs = [
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
];

const stats = [
  { value: "750+", label: "Lives Impacted" },
  { value: "300+", label: "Children Educated" },
  { value: "450+", label: "People Trained" },
];

const achievements = [
  {
    strong: "Educated over 300 children annually",
    rest: "from diverse backgrounds.",
  },
  {
    strong: "Provided livelihood training to 250 women",
    rest: "in Kakuma.",
  },
  {
    strong:
      "Successfully implemented early marriage prevention awareness sessions",
    rest: "for teenage girls.",
  },
  {
    strong: "Planted over 90 trees",
    rest: "in schools, churches, and community areas since inception.",
  },
  {
    strong: "Built strong partnerships",
    rest: "with local leaders, faith organizations, NGOs, and community groups.",
  },
];

const testimonials = [
  {
    quote:
      "HumAhive has given my daughter the confidence to stay in school and dream of becoming a teacher.",
    author: "Beneficiary's Parent",
  },
  {
    quote:
      "The training I received helped me start a small business and support my family.",
    author: "Women's Livelihood Program Graduate",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className={`section ${styles.hero}`}>
        <div className="page-container">
          <div className={styles.heroGrid}>
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="badge">
                <MapPin size={16} aria-hidden="true" />
                Kakuma Refugee Camp, Kenya
              </div>

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

              <div className={styles.heroActions}>
                <a
                  href={donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate on GoFundMe (opens in a new tab)"
                  className="btn btn-primary btn-lg"
                >
                  <Heart size={18} aria-hidden="true" />
                  Donate
                </a>
              </div>
            </div>

            {/* Right: Photo collage */}
            <div className={styles.heroMedia}>
              <div className="w-full aspect-video media-rounded relative">
                <Image
                  src="/images/gallery/campaign-group-01.jpg"
                  alt="Community members campaigning together against child marriage"
                  priority
                  sizes="(max-width: 767px) 100vw, 55vw"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="w-full aspect-video media-rounded relative">
                  <Image
                    src="/images/gallery/school-community-01.jpg"
                    alt="Schoolchildren gathered in front of a HumAhive banner"
                    sizes="(max-width: 767px) 50vw, 28vw"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full aspect-video media-rounded relative">
                  <Image
                    src="/images/gallery/campaign-participant-02.jpg"
                    alt="A young participant displaying a campaign marker"
                    sizes="(max-width: 767px) 50vw, 28vw"
                    fill
                    className="object-cover"
                  />
                </div>
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
        <div className={`page-container ${styles.introduction}`}>
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
            <p className={styles.introductionMessage}>
              A safe childhood. The chance to learn. A future with dignity.
            </p>
          </div>
          <div className={styles.communityFilm}>
            <h3 className="heading-2">Peace is a paradise</h3>
            <VideoCard video={communityVideo} showCaption={false} />
            <p className="body-base">
              Hear from our founder, Tangi Jerome, and community members about
              the hopes behind HumAhive&apos;s work in Kakuma.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-lg">
        <div className="page-container">
          <header className={styles.splitHeader}>
            <h2 className="display-2">Our Programs</h2>
            <p className="body-xl">
              We run five core programs that focus on education, women&apos;s
              empowerment, child protection, disability inclusion, and
              environmental conservation.
            </p>
          </header>

          <div className={styles.programGrid}>
            {programs.map((program, index) => (
              <article
                key={program.title}
                className={`${styles.programCard} ${index < 2 ? styles.programFeatured : ""}`}
              >
                <div className={`media-rounded relative ${styles.programImage}`}>
                  <Image
                    src={`/images/${program.image}`}
                    alt={program.title}
                    fill
                    sizes={
                      index < 2
                        ? "(max-width: 767px) 100vw, 50vw"
                        : "(max-width: 767px) 100vw, 33vw"
                    }
                    className="object-cover"
                  />
                </div>
                <h3 className="heading-3">{program.title}</h3>
                <p className="body-base">{program.description}</p>
                <span className={`badge ${styles.programBadge}`}>
                  {program.participants}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-lg bg-soft" aria-labelledby="about-title">
        <div className="page-container">
          <div className={styles.aboutGrid}>
            <div className={`media-rounded relative ${styles.aboutImage}`}>
              <Image
                src="/images/volunteers-01.jpg"
                alt="HumAhive volunteers and community members together"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className={styles.aboutText}>
              <h2 id="about-title" className="display-2">
                About HumAhive
              </h2>
              <p className="body-lg">
                Founded by community members who have experienced the challenges
                of displacement firsthand, HumAhive was created to respond to
                the urgent needs of marginalized people in Kakuma Refugee Camp.
                We are driven by the belief that lasting change begins with
                education, skills, and dignity.
              </p>
            </div>
          </div>

          <div className={styles.principles}>
            <div className={styles.principle}>
              <h3 className="eyebrow">Our Mission</h3>
              <p className={styles.principleText}>
                To empower vulnerable individuals in refugee and marginalized
                communities by providing access to education, livelihood
                opportunities, and holistic support, enabling them to live
                self-reliant and dignified lives.
              </p>
            </div>
            <div className={styles.principle}>
              <h3 className="eyebrow">Our Vision</h3>
              <p className={styles.principleText}>
                A future where all people — regardless of their circumstances
                — have the opportunity to learn, grow, and contribute
                positively to their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact: stats and achievements on an accent band */}
      <section
        id="achievements"
        className="section-lg bg-accent"
        aria-labelledby="achievements-title"
      >
        <div className="page-container">
          <h2 id="achievements-title" className="display-2 mb-12">
            Our Achievements
          </h2>

          <dl className={styles.statRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <ul className={styles.achievementList}>
            {achievements.map((item) => (
              <li key={item.strong} className="body-lg">
                <strong>{item.strong}</strong> {item.rest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-lg bg-soft" aria-labelledby="testimonials-title">
        <div className="page-container">
          <h2 id="testimonials-title" className="display-2 mb-12">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((item) => (
              <figure key={item.author} className={`quote-card ${styles.quote}`}>
                <span className={styles.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className={styles.quoteText}>{item.quote}</blockquote>
                <figcaption className={styles.quoteAuthor}>
                  {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved: donation appeal leads, Yvonne's story supports it */}
      <section
        id="get-involved"
        className="section-lg"
        aria-labelledby="get-involved-title"
      >
        <div className={`page-container ${styles.involvement}`}>
          <div className={styles.appeal}>
            <p className="eyebrow">Get Involved</p>
            <h2 id="get-involved-title" className="display-2">
              Together, We Build Futures
            </h2>
            <h3 className={`heading-3 ${styles.appealTitle}`}>
              Support English learning in Kakuma
            </h3>
            <p className="body-lg">
              Help volunteer English teachers provide women in Kakuma with
              opportunities to learn, build confidence, and connect with others.
            </p>
            <p className="body-base">
              The GoFundMe campaign helps provide classroom essentials such as
              notebooks, pens, chalk, and blackboards.
            </p>
            <div className={styles.appealAction}>
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Donate on GoFundMe (opens in a new tab)"
                className="btn btn-primary btn-lg"
              >
                <Heart size={18} aria-hidden="true" />
                Donate on GoFundMe
              </a>
              <p className="body-sm">View the campaign and donate on GoFundMe.</p>
            </div>
          </div>

          <div className={styles.story}>
            <VideoCard video={yvonneVideo} showCaption={false} />
            <div className={styles.storyCaption}>
              <h3 className="heading-4">Meet Yvonne</h3>
              <p className="body-base">
                Hear Yvonne speak in English about mentoring other women and
                her hopes for the future.
              </p>
              <Link href="/gallery" className="text-link">
                <Camera size={18} aria-hidden="true" />
                More stories from our community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
