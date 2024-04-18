import type { SolidAuthConfig } from "@solid-mediakit/auth/src/index";

export const authOptions: SolidAuthConfig = {
  secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  providers: [
    {
      id: "custom",
      name: "Custom",
      type: "oidc",
      issuer: `https://${process.env.OAUTH_DOMAIN}`,
      clientId: `${process.env.OAUTH_CLIENT_ID}`,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    },
  ],
};
