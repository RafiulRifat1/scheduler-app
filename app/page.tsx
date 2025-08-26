import SchedulerWrapper from "@/src/components/schedule/_components/wrapper/schedular-wrapper";
import { SchedulerProvider } from "@/src/providers/schedular-provider";



export default function Home() {
  return (
    <SchedulerProvider weekStartsOn="monday">
      <SchedulerWrapper 
        stopDayEventSummary={true}
        classNames={{
          tabs: {
            panel: "p-0",
          },
        }}
      />
    </SchedulerProvider>
  );
}
