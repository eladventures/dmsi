"use client"

import { HeroHeader } from "@/components/hero-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import Link from "next/link"

const allForms = [
  {
    title: "Individual or Joint Forms - Online",
    description: "Digital forms for individual and joint account management",
    filename: "individual_or_joint_forms_online.pdf"
  },
  {
    title: "Individual or Joint Forms - Broker Assisted",
    description: "Broker-assisted forms for individual and joint accounts",
    filename: "individual_or_joint_forms_broker_assisted.pdf"
  },
  {
    title: "Corporate Forms - Online",
    description: "Digital forms for corporate account management",
    filename: "corporate_forms_online.pdf"
  },
  {
    title: "Corporate Forms - Broker Assisted",
    description: "Broker-assisted forms for corporate accounts",
    filename: "corporate_forms_broker_assisted.pdf"
  },
  {
    title: "Request for Certification",
    description: "Form to request account certification documents",
    filename: "request_for_certification.pdf"
  },
  {
    title: "Request for Stock Transfer",
    description: "Form to request transfer of stock holdings",
    filename: "request_for_stock_transfer.pdf"
  },
  {
    title: "Request for Upliftment of Stock Certificates",
    description: "Form to request upliftment of physical stock certificates",
    filename: "request_for_upliftment_of_stok_certificate.pdf"
  },
  {
    title: "Request for Withdrawal of Funds",
    description: "Form to request withdrawal from your account",
    filename: "request_for_withdrawal_of_funds.pdf"
  },
  {
    title: "NOCD Consent Form",
    description: "Non-objection consent document form",
    filename: "nocd_consent_form.pdf"
  }
]

export default function FormsPage() {
  return (
    <div className="min-h-screen">
      <HeroHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Downloadable Forms
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access all the forms you need for your account management and investment services. 
              Download, complete, and submit the appropriate forms for your requirements.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>All forms are available in PDF format</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {allForms.map((form, formIndex) => (
              <Card key={formIndex} className="w-full max-w-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-muted">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-muted/50 flex-shrink-0">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-base leading-tight mb-1 line-clamp-2">
                        {form.title}
                      </CardTitle>
                      <CardDescription className="text-xs line-clamp-2">
                        {form.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    asChild 
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    <Link 
                      href={`/forms/${form.filename}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-3 w-3 mr-2" />
                      Download PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">Need Help?</h3>
            <p className="text-muted-foreground">
              If you need assistance completing any of these forms or have questions about 
              which form is right for your needs, our team is here to help.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
            >
              <Link href="#contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}