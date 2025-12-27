import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/store";

const Support = () => {
  return (
    <Layout>
      <PageHeader 
        tag="Support"
        title="Help your customers."
        description="Use this page to answer common questions, offer help, and guide customers to solutions quickly and efficiently."
      />

      {/* FAQ Section */}
      <section className="container-main py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium">Frequently asked questions</h2>
            <p className="text-muted-foreground mt-2">
              Give your visitors quick answers to common questions about your store like these.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted/50 rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container-main py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium">Still got questions?</h2>
            <p className="text-muted-foreground mt-2">
              Send us a message below and we'll get back to you in 1 business day.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="rounded-xl" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="How can we help?" 
                rows={5}
                className="rounded-xl resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-xl">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
