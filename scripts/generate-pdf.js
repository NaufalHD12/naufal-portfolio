import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Use a narrower viewport that's closer to A4 proportions
  // A4 at 96dpi is about 794x1123px
  await page.setViewport({ width: 794, height: 1123 });

  console.log('Navigating to http://localhost:8080...');
  try {
    await page.goto('http://localhost:8080', {
      waitUntil: 'networkidle0',
    });
  } catch (error) {
    console.error('Error connecting to http://localhost:8080. Make sure your dev server is running! (npm run dev)');
    await browser.close();
    process.exit(1);
  }

  // Force screen media type
  await page.emulateMediaType('screen');

  // Inject comprehensive print-optimized CSS
  await page.addStyleTag({
    content: `
      /* Hide scrollbars */
      ::-webkit-scrollbar { display: none !important; }
      body { 
        -ms-overflow-style: none !important; 
        scrollbar-width: none !important;
      }

      /* Ensure body background extends to edges */
      html, body {
        margin: 0 !important;
        padding: 0 !important;
      }

      /* CRITICAL: Prevent page breaks inside important elements */
      section,
      .section-padding,
      article {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }

      /* Cards and glass elements should never be split */
      .glass,
      .card,
      [class*="rounded"] {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }

      /* Force each major section to start on new page for cleaner layout */
      #about,
      #skills,
      #projects,
      #experience,
      #contact {
        break-before: page !important;
        page-break-before: always !important;
      }

      /* Keep headings with their content */
      h1, h2, h3, h4, h5, h6 {
        break-after: avoid !important;
        page-break-after: avoid !important;
      }

      /* Reduce section padding for print */
      .section-padding {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
      }

      /* Hide the navbar in PDF (optional - it wastes space) */
      nav {
        display: none !important;
      }

      /* Make footer less prominent */
      footer {
        padding: 1rem !important;
        margin-top: auto !important;
      }

      /* Ensure skill icons don't break */
      .grid > div {
        break-inside: avoid !important;
      }
    `
  });

  console.log('Scrolling to trigger animations...');
  // Auto-scroll to trigger all animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  });

  // Wait for animations to complete
  await new Promise(r => setTimeout(r, 2000));

  // Scroll back to top before generating PDF
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));

  console.log('Generating PDF...');
  await page.pdf({
    path: 'portfolio.pdf',
    printBackground: true,
    format: 'A4',
    scale: 1, // Full scale since viewport matches A4
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  console.log('PDF generated successfully: portfolio.pdf');

  await browser.close();
})();
