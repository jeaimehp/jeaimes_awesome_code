import { NextResponse } from "next/server";

// Static-export-safe API route.
// `force-static` allows this route to be pre-rendered at build time when
// using `output: "export"` (required for GitHub Pages hosting).
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    name: "Jeaime Powell",
    role: "Systems Analyst & Community Building Specialist",
    location: "Orlando, Florida, United States",
    email: "jeaimehp@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeaimehp",
  });
}
