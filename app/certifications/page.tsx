import AppLayout from "@/components/layout/AppLayout";
import PageContainer from "@/components/layout/PageContainer";

export default function CertificationsPage() {
  return (
    <AppLayout>
      <PageContainer>
        <main className="mx-auto max-w-6xl px-6 py-16">
          {/* Header */}
          <section className="border-b pb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </p>

            <h1 className="max-w-3xl text-5xl font-serif font-medium tracking-tight md:text-6xl">
              Learning,
              <br />
              validated.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              A collection of certifications that reflect my learning across
              data engineering, analytics, and data science.
            </p>
          </section>

          {/* Data Engineering */}
          <section className="border-b py-16">
            <div className="grid gap-12 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  01
                </p>

                <h2 className="mt-3 text-3xl font-serif font-medium">
                  Data Engineering
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Certifications focused on data pipelines, databases,
                  distributed systems, cloud platforms, and data
                  infrastructure.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <CertificateCard
                  number="01"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />

                <CertificateCard
                  number="02"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />
              </div>
            </div>
          </section>

          {/* Data Analytics */}
          <section className="border-b py-16">
            <div className="grid gap-12 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  02
                </p>

                <h2 className="mt-3 text-3xl font-serif font-medium">
                  Data Analytics
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Certifications focused on SQL, data analysis,
                  visualization, business intelligence, and analytical
                  problem solving.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <CertificateCard
                  number="01"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />

                <CertificateCard
                  number="02"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />
                
              </div>
            </div>
          </section>

          {/* Data Science */}
          <section className="border-b py-16">
            <div className="grid gap-12 md:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  03
                </p>

                <h2 className="mt-3 text-3xl font-serif font-medium">
                  Data Science
                </h2>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Certifications covering statistics, machine learning,
                  predictive modeling, and data science concepts.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <CertificateCard
                  number="01"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />

                <CertificateCard
                  number="02"
                  name="Certificate Name"
                  organization="Issuing Organization"
                  date="Date"
                />
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-3xl font-serif leading-relaxed md:text-4xl">
                Learning never really ends. Every certification is another
                step forward.
              </p>
            </div>
          </section>
        </main>
      </PageContainer>
    </AppLayout>
  );
}

function CertificateCard({
  number,
  name,
  organization,
  date,
}: {
  number: string;
  name: string;
  organization: string;
  date: string;
}) {
  return (
    <article className="group border p-6 transition-colors hover:bg-muted/40">
      <div className="flex items-start justify-between">
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Certificate {number}
        </span>

        <span className="text-sm text-muted-foreground">↗</span>
      </div>

      <h3 className="mt-10 text-2xl font-serif font-medium">
        {name}
      </h3>

      <p className="mt-3 text-sm text-muted-foreground">
        {organization}
      </p>

      <div className="mt-8 flex items-center justify-between border-t pt-4">
        <span className="text-xs text-muted-foreground">
          {date}
        </span>

        <span className="text-xs uppercase tracking-[0.12em]">
          View Certificate
        </span>
      </div>
    </article>
  );
}