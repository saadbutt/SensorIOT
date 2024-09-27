import robotstxt from "generate-robotstxt";
import fs from "fs"; // Import fs to save the generated robots.txt to a file

robotstxt({
  policy: [
    {
      userAgent: "*",  // This means all bots
      allow: "/",      // Allow everything
      disallow: "",    // No specific disallow rules
    },
  ],
  sitemap: "https://www.iotdefender.io/sitemap.xml",  // Your sitemap URL
  host: "https://www.iotdefender.io",  // Your host URL
})
  .then((content) => {
    console.log(content); // Log the generated robots.txt content

    // Write the content to a robots.txt file
    fs.writeFileSync('build/robots.txt', content);
    console.log('robots.txt generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating robots.txt:', error);
    throw error;
  });
