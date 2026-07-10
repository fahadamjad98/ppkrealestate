import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import {
  LegalLayout,
  LegalHeading,
  LegalText,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PPK Real Estate collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="10 July 2026">
      <LegalText>
        This Privacy Policy explains how PPK Real Estate (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;Company&rdquo;) collects, uses, and protects
        the personal information you provide when you use our website at
        ppkrealestate.com (the &ldquo;Site&rdquo;). By using the Site, you
        consent to the practices described in this policy.
      </LegalText>

      <LegalHeading>Information We Collect</LegalHeading>
      <LegalText>
        We may collect personal information that you voluntarily provide to us
        — such as your name, email address, phone number, and any details you
        include when you submit an enquiry, request a property valuation, or
        contact us. We may also automatically collect limited technical
        information, such as your IP address, browser type, and how you
        interact with the Site.
      </LegalText>

      <LegalHeading>How We Use Your Information</LegalHeading>
      <LegalText>
        We use the information we collect to respond to your enquiries, provide
        and improve our advisory and brokerage services, share relevant
        property opportunities you have requested, and comply with our legal
        obligations. We do not sell your personal information.
      </LegalText>

      <LegalHeading>Sharing Your Information</LegalHeading>
      <LegalText>
        We may share your information with trusted third parties who assist us
        in operating the Site and delivering our services — such as developers,
        mortgage partners, or service providers — only where necessary and
        subject to appropriate confidentiality obligations. We may also disclose
        information where required by law or to protect our legal rights.
      </LegalText>

      <LegalHeading>Cookies</LegalHeading>
      <LegalText>
        The Site may use cookies and similar technologies to remember your
        preferences and understand how the Site is used. You can set your
        browser to refuse cookies, though some features of the Site may not
        function properly as a result.
      </LegalText>

      <LegalHeading>Data Security</LegalHeading>
      <LegalText>
        We take reasonable technical and organisational measures to protect your
        personal information against unauthorised access, loss, or misuse.
        However, no method of transmission over the internet is completely
        secure, and we cannot guarantee absolute security.
      </LegalText>

      <LegalHeading>Your Rights</LegalHeading>
      <LegalText>
        You may request access to, correction of, or deletion of the personal
        information we hold about you, and you may opt out of marketing
        communications at any time. To exercise these rights, please contact us
        using the details below.
      </LegalText>

      <LegalHeading>Changes to This Policy</LegalHeading>
      <LegalText>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </LegalText>

      <LegalHeading>Contact Us</LegalHeading>
      <LegalText>
        If you have any questions about this Privacy Policy or how we handle
        your information, please contact us at {BRAND.email} or {BRAND.phone}.
        Our office is located at {BRAND.address}.
      </LegalText>
    </LegalLayout>
  );
}
