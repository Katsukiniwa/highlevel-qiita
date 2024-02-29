import { LineChart } from "@/components/chart/line-chart/LineChart";
import { getChartRandomData } from "@/lib/data";
import { Heading } from "@radix-ui/themes";

export default async function Page() {
  const data = await getChartRandomData();

  return (
    <div className="bg-green-200 rounded-xl mb-4 p-4">
      <Heading>Pave View Analytics</Heading>
      <LineChart data={data} />
    </div>
  );
}
