// IndexNow submission.
//
// IndexNow lets us tell Bing (and Yandex, Seznam, Naver) that URLs changed,
// instead of waiting for a crawl. It needs two things:
//
//   1. A key file reachable at https://www.nouvie.co/<key>.txt whose only
//      content is the key itself. Generate a key at
//      https://www.bing.com/indexnow, then save it as public/<key>.txt.
//      The key is NOT invented here — without INDEXNOW_KEY set, this route
//      does nothing and says so.
//
//   2. A POST to the IndexNow API listing the changed URLs. That is this route.
//
// The URL list comes from lib/site-urls.ts, the same source app/sitemap.ts
// reads, so what we ping and what we submit can never disagree.
//
// Trigger it manually after a content change:
//   curl -X POST "https://www.nouvie.co/api/indexnow?secret=$INDEXNOW_SECRET"

import { NextResponse } from "next/server";
import { allIndexableUrls } from "@/lib/site-urls";
import { SITE_URL } from "@/lib/seo";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

export async function POST(request: Request) {
  const key = process.env.INDEXNOW_KEY;
  const secret = process.env.INDEXNOW_SECRET;

  if (!key) {
    return NextResponse.json(
      {
        error:
          "INDEXNOW_KEY is not set. Generate a key at https://www.bing.com/indexnow, " +
          "save it as public/<key>.txt containing only the key, and set INDEXNOW_KEY.",
      },
      { status: 503 }
    );
  }

  // Anyone can POST to a public route, and submitting on someone else's behalf
  // is the thing IndexNow's key file exists to prevent. Gate it.
  if (!secret) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET is not set. Refusing to expose an unguarded submission route." },
      { status: 503 }
    );
  }

  const provided = new URL(request.url).searchParams.get("secret");
  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const host = new URL(SITE_URL).host;
  const urlList = allIndexableUrls();

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList,
    }),
  });

  // IndexNow answers 200/202 on success. Return whatever it said rather than
  // swallowing it, so a failed submission is visible instead of silent.
  return NextResponse.json(
    {
      submitted: urlList.length,
      indexNowStatus: response.status,
      indexNowBody: await response.text(),
    },
    { status: response.ok ? 200 : 502 }
  );
}
