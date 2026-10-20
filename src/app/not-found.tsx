import { brand } from "@/brand/brand";
import { Notice } from "@/components/Notice";

/** Shown, inside the shared frame, for any URL that matches no route. */
export default function NotFound() {
  return <Notice {...brand.notFound} />;
}
