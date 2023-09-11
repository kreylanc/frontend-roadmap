export const metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "privacy-policy",
  },
};

export default function page() {
  return (
    <div className="w-full 2xl:max-w-7xl mx-auto px-4 md:px-8 mt-8">
      <h1 className="text-5xl font-bold">Privacy Policy</h1>
      <p className="mt-8">
        Welcome to Frontend Roadmap. We are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy explains how we collect, use, and protect your personal data when
        you visit our website.
      </p>
      <br />
      <h2 className="text-3xl font-semibold">Information We Collect</h2>
      <p className="mt-4">
        We use Vercel Web Analytics for collecting data for analytics. When
        using Vercel Web Analytics, no personal identifiers that track and
        cross-check end users' data across different applications or websites,
        are collected. We do not collect or store any information that would
        enable us to reconstruct an end user’s browsing session across different
        applications or websites and/or personally identify an end user. A
        minimal amount of data is collected and it is used for aggregated
        statistics only.
      </p>
    </div>
  );
}
