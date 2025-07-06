'use client'

import { useState } from 'react'
import { HeroHeader } from '@/components/hero-header'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import { Button } from '@/components/ui/button'
import { Download, FileText, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FirstNewsPage() {
    const [pdfError, setPdfError] = useState(false)
    
    // Sample PDF path - replace with actual report path
    const pdfPath = '../reports/a.pdf'
    const downloadFileName = 'DA-Market-Securities-Daily-Report.pdf'

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = pdfPath
        link.download = downloadFileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handlePdfError = () => {
        setPdfError(true)
    }

    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="First News & Market Updates"
                subtitle="Stay informed with our daily market insights, analysis, and news updates. Download our comprehensive reports to stay ahead of market trends."
            />

            <SectionWrapper maxWidth="medium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-card rounded-2xl border shadow-sm overflow-hidden"
                    >
                        {/* PDF Viewer Container */}
                        <div className="relative">
                            {!pdfError ? (
                                <div className="w-full">
                                    {/* PDF Embed - Portrait orientation */}
                                    <iframe
                                        src={pdfPath}
                                        className="w-full h-[800px] md:h-[1000px] lg:h-[1200px]"
                                        title="Market Report PDF"
                                        onError={handlePdfError}
                                        style={{
                                            border: 'none',
                                            backgroundColor: '#f8f9fa'
                                        }}
                                    />
                                </div>
                            ) : (
                                /* Fallback Content */
                                <div className="flex flex-col items-center justify-center h-96 p-8 text-center">
                                    <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">PDF Preview Not Available</h3>
                                    <p className="text-muted-foreground mb-6 max-w-md">
                                        The PDF preview couldn't be loaded. You can still download the full report using the button below.
                                    </p>
                                    <Button
                                        onClick={handleDownload}
                                        className="bg-[#40739d] hover:bg-[#40739d]/90"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Report
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Download Section */}
                        {!pdfError && (
                            <div className="border-t bg-muted/30 p-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-[#40739d]" />
                                        <div>
                                            <h3 className="font-semibold">Daily Market Report</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Latest market analysis and insights
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={handleDownload}
                                        className="bg-[#40739d] hover:bg-[#40739d]/90"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Download PDF
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Additional Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="text-center p-6 bg-card rounded-lg border">
                            <h4 className="font-semibold mb-2">Daily Updates</h4>
                            <p className="text-sm text-muted-foreground">
                                Fresh market analysis delivered every trading day
                            </p>
                        </div>
                        <div className="text-center p-6 bg-card rounded-lg border">
                            <h4 className="font-semibold mb-2">Expert Insights</h4>
                            <p className="text-sm text-muted-foreground">
                                Professional analysis from our research team
                            </p>
                        </div>
                        <div className="text-center p-6 bg-card rounded-lg border">
                            <h4 className="font-semibold mb-2">Market Trends</h4>
                            <p className="text-sm text-muted-foreground">
                                Stay ahead with comprehensive trend analysis
                            </p>
                        </div>
                    </motion.div>

                    {/* Archive Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Previous Reports</h3>
                        <p className="text-muted-foreground mb-6">
                            Looking for historical market data? Contact our team for access to our report archive.
                        </p>
                        <Button
                            variant="outline"
                            className="border-[#40739d] text-[#40739d] hover:bg-[#40739d] hover:text-white"
                        >
                            Request Archive Access
                        </Button>
                    </motion.div>
            </SectionWrapper>

            <Footer />
        </div>
    )
}