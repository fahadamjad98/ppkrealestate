import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import {
  LegalLayout,
  LegalHeading,
  LegalText,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms and conditions governing your use of the PPK Real Estate website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="10 July 2026">
      <LegalText>
        The PPK Real Estate website located at ppkrealestate.com is a
        copyrighted work belonging to PPK Real Estate. Certain features of the
        Site may be subject to additional guidelines, terms, or rules, which
        will be posted on the Site in connection with such features.
      </LegalText>
      <LegalText>
        All such additional terms, guidelines, and rules are incorporated by
        reference into these Terms.
      </LegalText>
      <LegalText>
        These Terms of Use described the legally binding terms and conditions
        that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE
        BEING COMPLIANT THAT THESE TERMS and you represent that you have the
        authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST
        18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE
        PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
      </LegalText>
      <LegalText>
        These terms require the use of arbitration Section 10.2 on an individual
        basis to resolve disputes and also limit the remedies available to you
        in the event of a dispute.
      </LegalText>

      <LegalHeading>Access to the Site</LegalHeading>
      <LegalText>
        Subject to these Terms. Company grants you a non-transferable,
        non-exclusive, revocable, limited license to access the Site solely for
        your own personal, noncommercial use.
      </LegalText>
      <LegalText>
        Certain Restrictions. The rights approved to you in these Terms are
        subject to the following restrictions: (a) you shall not sell, rent,
        lease, transfer, assign, distribute, host, or otherwise commercially
        exploit the Site; (b) you shall not change, make derivative works of,
        disassemble, reverse compile or reverse engineer any part of the Site;
        (c) you shall not access the Site in order to build a similar or
        competitive website; and (d) except as expressly stated herein, no part
        of the Site may be copied, reproduced, distributed, republished,
        downloaded, displayed, posted or transmitted in any form or by any
        means unless otherwise indicated, any future release, update, or other
        addition to functionality of the Site shall be subject to these Terms.
        All copyright and other proprietary notices on the Site must be retained
        on all copies thereof.
      </LegalText>
      <LegalText>
        Company reserves the right to change, suspend, or cease the Site with or
        without notice to you. You approved that Company will not be held liable
        to you or any third-party for any change, interruption, or termination
        of the Site or any part.
      </LegalText>
      <LegalText>
        No Support or Maintenance. You agree that Company will have no obligation
        to provide you with any support in connection with the Site.
      </LegalText>

      <LegalHeading>Contact Us</LegalHeading>
      <LegalText>
        If you have any questions about these Terms, please contact us at{" "}
        {BRAND.email} or {BRAND.phone}.
      </LegalText>
    </LegalLayout>
  );
}
