import { useLocalSearchParams } from "expo-router";

import { users } from "@/data";
import { ProfileScreen } from "@/components/profileScreen";

// Run in Node.js environments at build time to generate a list of
// pages that should be statically generated.
export function generateStaticParams() {
  return users.map(({ user }) => ({ profile: user }));
}

export default function Profile() {
  const { profile } = useLocalSearchParams<{ profile: string }>();
  return <ProfileScreen profile={profile} />;
}
