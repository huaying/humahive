import Link from "next/link";
import Image from "next/image";
import { Users, Heart, Globe, MapPin, Camera } from "lucide-react";

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
              <div
                className="inline-flex items-center px-4 py-2 rounded-full body-sm font-medium"
                style={{
                  backgroundColor: "var(--orange-100)",
                  color: "var(--orange-600)",
                }}
              >
                <MapPin size={16} className="mr-2" />
                Kakuma Refugee Camp, Kenya
              </div>

              {/* Main Title */}
              <h1 className="display-1">
                Discover the
                <br />
                World&apos;s <span className="text-primary">Hidden</span>
                <br />
                Wonders
              </h1>

              {/* Description */}
              <p className="body-xl max-w-lg">
                Explore unique programs and inspiring stories that empower
                vulnerable communities in Kakuma Refugee Camp. Experience the
                life-changing impact of education, empowerment, and hope.
              </p>
            </div>

            {/* Right: Photo Gallery */}
            <div className="relative">
              {/* Main large image */}
              <div className="w-full h-95 rounded-2xl overflow-hidden mb-0 lg:mb-4 relative">
                <Image
                  src="/images/kids8-11-05.jpg"
                  alt="Education in Action - Children Learning Together"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom two smaller images */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="w-full h-40 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/humahive-03.jpg"
                    alt="Women Training Workshop"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-full h-40 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/business-01.jpg"
                    alt="Green Initiative - Environmental Conservation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating accent element */}
              <div
                className="absolute -bottom-3 left-6 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--orange-200)" }}
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

      {/* Introduction Section */}
      <section className="section bg-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="display-2 mb-12">Who We Are</h2>
            <p className="body-xl leading-relaxed mb-8">
              HumAhive is a nonprofit organization based in Kakuma Refugee Camp,
              Kenya. We support vulnerable communities through education,
              livelihood training, and social empowerment. We focus on helping
              people with disabilities, widows, orphans, and young women, while
              also addressing critical challenges such as poverty, early
              marriage, and environmental degradation.
            </p>
            <p className="body-xl leading-relaxed text-primary-dark font-medium">
              Our work is rooted in compassion, inclusivity, and innovation —
              building a future where every individual, regardless of
              background, has the opportunity to thrive.
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
                  <div className="image-card rounded-2xl overflow-hidden relative">
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
                      <span className="body-md font-medium text-primary">
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
                the urgent needs of marginalized people in Kakuma refugee camp.
                We are driven by the belief that lasting change begins with
                education, skills, and dignity.
              </p>

              <div
                className="p-8 rounded-lg"
                style={{
                  borderLeft: "4px solid var(--color-primary)",
                  backgroundColor: "var(--orange-50)",
                }}
              >
                <div className="flex items-center mb-4 gap-2">
                  <Heart size={32} style={{ color: "var(--color-primary)" }} />
                  <h4 className="heading-3">Our Mission</h4>
                </div>
                <p className="body-base">
                  To empower vulnerable individuals in refugee and marginalized
                  communities by providing access to education, livelihood
                  opportunities, and holistic support, enabling them to live
                  self-reliant and dignified lives.
                </p>
              </div>

              <div
                className="p-8 rounded-lg"
                style={{
                  borderLeft: "4px solid var(--color-primary)",
                  backgroundColor: "var(--orange-50)",
                }}
              >
                <div className="flex items-center mb-4 gap-2">
                  <Globe size={32} style={{ color: "var(--color-primary)" }} />
                  <h4 className="heading-3">Our Vision</h4>
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
              <div className="w-full h-80 rounded-2xl overflow-hidden relative">
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
                    style={{ color: "var(--orange-700)" }}
                  >
                    750+
                  </div>
                  <p className="body-xl">Lives Impacted</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-center p-4">
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "var(--orange-600)" }}
                    >
                      300+
                    </div>
                    <p className="body-base">Children Educated</p>
                  </div>
                  <div className="text-center p-4">
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color: "var(--orange-600)" }}
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

      {/* Get Involved Section */}
      <section id="get-involved" className="section bg-soft">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-8">Get Involved</h2>
              <p className="body-xl max-w-3xl mx-auto">
                HumAhive thrives on the support of individuals and organizations
                who share our vision. Together, we can create lasting change for
                vulnerable and marginalized communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: "var(--orange-100)" }}
                >
                  <Users size={40} style={{ color: "var(--orange-600)" }} />
                </div>
                <div>
                  <h3 className="heading-2 mb-4">Volunteer</h3>
                  <p className="body-base">
                    Share your skills and time to support our programs.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: "var(--orange-100)" }}
                >
                  <Globe size={40} style={{ color: "var(--orange-600)" }} />
                </div>
                <div>
                  <h3 className="heading-2 mb-4">Partner</h3>
                  <p className="body-base">
                    Collaborate with us on projects and outreach.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: "var(--orange-100)" }}
                >
                  <Heart size={40} style={{ color: "var(--orange-600)" }} />
                </div>
                <div>
                  <h3 className="heading-2 mb-4">Donate</h3>
                  <p className="body-base">
                    Contribute financially or in-kind to sustain our work.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="body-lg font-medium mb-6 text-primary-dark">
                Contact us to learn how you can be part of our mission.
              </p>
              <a
                href="mailto:humanafricanhive@gmail.com?subject=Get Involved with HumAhive"
                className="btn btn-primary btn-lg"
              >
                Start Your Journey with Us
              </a>
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
                className="p-8 rounded-3xl relative"
                style={{ backgroundColor: "var(--orange-50)" }}
              >
                <div
                  className="absolute top-6 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <span className="text-white text-2xl font-bold">&quot;</span>
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
                className="p-8 rounded-3xl relative"
                style={{ backgroundColor: "var(--orange-200)" }}
              >
                <div
                  className="absolute top-6 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--orange-500)" }}
                >
                  <span className="text-white text-2xl font-bold">&quot;</span>
                </div>

                <div className="pt-10">
                  <p
                    className="body-lg mb-2 leading-relaxed"
                    style={{ color: "var(--orange-800)" }}
                  >
                    The training I received helped me start a small business and
                    support my family.
                  </p>

                  <div>
                    <p
                      className="body-sm font-semibold"
                      style={{ color: "var(--orange-800)" }}
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

      {/* Final CTA */}
      <section
        id="contact"
        className="section"
        style={{ backgroundColor: "var(--orange-100)" }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="display-2 mb-8"
              style={{ color: "var(--orange-800)" }}
            >
              Together, We Build Futures
            </h2>
            <p
              className="body-xl mb-12 max-w-2xl mx-auto"
              style={{ color: "var(--orange-700)" }}
            >
              Every contribution creates lasting change in the lives of
              vulnerable communities in Kakuma refugee camp.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="mailto:humanafricanhive@gmail.com?subject=Support Inquiry"
                className="btn btn-lg btn-primary"
              >
                Support Now
              </a>
              <Link href="/gallery" className="btn btn-secondary btn-lg">
                <Camera size={20} className="mr-2" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
