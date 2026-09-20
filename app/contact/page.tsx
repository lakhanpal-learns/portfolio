import AppLayout from "@/components/layout/AppLayout";
import PageContainer from "@/components/layout/PageContainer";

export default function ContactPage() {
  return (
    <AppLayout>
      <PageContainer>
        <main className="mx-auto max-w-6xl px-6 py-16">
          {/* Header */}
          <section className="border-b pb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>

            <h1 className="max-w-4xl text-5xl font-serif font-medium tracking-tight md:text-7xl">
              Let’s build
              <br />
              something meaningful.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Whether you have an opportunity, a project idea, or simply want
              to connect, feel free to reach out.
            </p>
          </section>

          {/* Contact Content */}
          <section className="grid gap-16 py-16 md:grid-cols-[1fr_1.4fr]">
            {/* Left */}
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Get in touch
              </p>

              <h2 className="mt-4 max-w-md text-3xl font-serif font-medium leading-tight">
                I’m always open to interesting conversations and opportunities.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                Interested in data analytics, data engineering, business
                intelligence, or building something with data? Let's connect.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-0">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="group flex items-center justify-between border-t py-6 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-2 text-lg">
                    your.email@example.com
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t py-6 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    LinkedIn
                  </p>

                  <p className="mt-2 text-lg">
                    Connect with me
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t py-6 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    GitHub
                  </p>

                  <p className="mt-2 text-lg">
                    View my work
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* Resume */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-y py-6 transition-colors hover:bg-muted/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Resume
                  </p>

                  <p className="mt-2 text-lg">
                    Download my resume
                  </p>
                </div>

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </section>

          {/* Availability */}
          <section className="border-t py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  Availability
                </p>

                <h2 className="mt-3 text-3xl font-serif font-medium">
                  Open to opportunities.
                </h2>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
                Available for conversations
              </div>
            </div>
          </section>

          {/* Footer Statement */}
          <section className="border-t py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-3xl font-serif leading-relaxed md:text-4xl">
                “Good things happen when curious people start a conversation.”
              </p>
            </div>
          </section>
        </main>
      </PageContainer>
    </AppLayout>
  );
}