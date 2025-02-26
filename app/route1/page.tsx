import Route1Table from "../ui/route1-table";
import LoadingRoute1 from "../ui/loading-route1";
import { Suspense } from "react";
export default function Page() {
  return (
    <div>
      <Suspense fallback={<LoadingRoute1/>}>
        <Route1Table />
      </Suspense>
    </div>
  );
}
