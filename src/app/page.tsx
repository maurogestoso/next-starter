import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Next.js Starter</CardTitle>
          <CardDescription>
            My own opinionated Next.js app boilerplate
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
