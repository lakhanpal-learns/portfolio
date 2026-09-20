import AppLayout from "@/components/layout/AppLayout";
import PageContainer from "@/components/layout/PageContainer";

export default function ExperiencePage() {
  return (
    <AppLayout>
      <PageContainer>
        <main className="mx-auto max-w-6xl px-6 py-16">
          {/* Header */}
          <section className="border-b pb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Experience
            </p>

            <h1 className="max-w-3xl text-5xl font-serif font-medium tracking-tight md:text-6xl">
              Where I’ve been
              <br />
              and what I’ve built.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              My experience across university initiatives, entrepreneurship,
              innovation, and student engagement.
            </p>
          </section>

          {/* Experience */}
          <section className="py-16">
            <div className="grid gap-12 md:grid-cols-[220px_1fr]">
              {/* Section title */}
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  01
                </p>

                <h2 className="mt-3 text-3xl font-serif font-medium">
                  Experience
                </h2>
              </div>

              {/* Timeline */}
              <div className="space-y-0">
                {/* Experience 1 — GU-TBI */}
                <article className="relative border-l border-border pl-8 pb-14">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />

                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-medium">
                        GU-TBI
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        GNA University Technology Business Incubator
                      </p>
                    </div>

                    <span className="text-sm text-muted-foreground">
                      University Experience
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                    Worked as an assistant with GU-TBI, supporting
                    entrepreneurship and innovation initiatives and helping
                    with event management activities.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-xs">
                      Event Management
                    </span>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      Entrepreneurship
                    </span>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      Innovation
                    </span>
                  </div>
                </article>

                {/* Experience 2 — Campus Ambassador */}
                <article className="relative border-l border-border pl-8">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />

                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-medium">
                        Campus Ambassador
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Innovation Mission Punjab
                      </p>
                    </div>

                    <span className="text-sm text-muted-foreground">
                      Campus Leadership
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                    Represented Innovation Mission Punjab on campus and
                    participated in initiatives focused on innovation,
                    entrepreneurship, and student engagement.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-xs">
                      Innovation
                    </span>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      Student Engagement
                    </span>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      Leadership
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="border-t py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-3xl font-serif leading-relaxed md:text-4xl">
                “Every experience is another opportunity to learn, build, and
                create something meaningful.”
              </p>

              <p className="mt-6 text-sm text-muted-foreground">
                Lakhanpal
              </p>
            </div>
          </section>
        </main>
      </PageContainer>
    </AppLayout>
  );
}