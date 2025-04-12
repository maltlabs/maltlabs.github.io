// Script to load blog posts from static JSON file
document.addEventListener('DOMContentLoaded', function() {
  const blogContainer = document.getElementById('blog-posts-container');

  if (blogContainer) {
    // Show loading state
    blogContainer.innerHTML = '<div class="text-center py-10"><div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div><p class="mt-2 text-gray-400">Loading posts...</p></div>';

    // Function to format date
    function formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Mock posts data - Using this directly instead of loading from JSON file
    const posts = [
      {
        id: 1,
        title: "MaltLabs is Now Backed by AWS: A New Chapter Begins",
        slug: "maltlabs-is-now-backed-by-aws",
        excerpt: "We’re proud to share some amazing news — MaltLabs is now officially part of the AWS Activate program!",
        publishedAt: "2025-04-12T10:00:00Z",
        author: "Jésus Lopes",
        tags: ["AI", "AWS", "Automation"],
        coverImage: "assets/blog/aws-startup.jpg"
      },
      {
        id: 2,
        title: "How AI is Transforming Digital Marketing",
        slug: "how-ai-transforming-digital-marketing",
        excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies for small and medium businesses.",
        publishedAt: "2025-03-15T10:00:00Z",
        author: "Jésus Lopes",
        tags: ["AI", "Digital Marketing", "Automation"],
        coverImage: "assets/blog/ai-marketing.jpg"
      },
      {
        id: 3,
        title: "Complete Guide to Chatbots for Customer Service",
        slug: "complete-guide-chatbots-customer-service",
        excerpt: "Everything you need to know to implement intelligent chatbots and improve your company's customer service.",
        publishedAt: "2025-03-01T10:00:00Z",
        author: "Kamilla Lopes",
        tags: ["Chatbots", "Customer Service", "AI"],
        coverImage: "assets/blog/chatbots.jpg"
      },
      {
        id: 4,
        title: "Marketing Automation: Where to Start",
        slug: "marketing-automation-where-to-start",
        excerpt: "A step-by-step guide to implementing marketing automation in your business, even with limited resources.",
        publishedAt: "2025-02-20T10:00:00Z",
        author: "Jésus Lopes",
        tags: ["Automation", "Marketing", "SMBs"],
        coverImage: "assets/blog/marketing-automation.jpg"
      }
    ];
    
    // Render posts
    setTimeout(() => {
      let postsHTML = '';
      
      // Determine how many posts to show based on container location
      const isHomepage = !window.location.pathname.includes('/blog/');
      const postsToShow = isHomepage ? Math.min(3, posts.length) : posts.length;
      
      for (let i = 0; i < postsToShow; i++) {
        const post = posts[i];
        const formattedDate = formatDate(post.publishedAt);
        const tagsHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');
        
        postsHTML += `
          <div class="blog-card bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img src="/${post.coverImage}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="mb-2">${tagsHTML}</div>
              <h3 class="text-xl font-bold mb-2">${post.title}</h3>
              <p class="text-gray-400 mb-4">${post.excerpt}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">${formattedDate}</span>
                <a href="/blog/${post.slug}.html" class="text-blue-500 hover:text-blue-400 font-medium">Read more</a>
              </div>
            </div>
          </div>
        `;
      }
      
      blogContainer.innerHTML = postsHTML;
      
      // Add fade-in animation
      const blogCards = document.querySelectorAll('.blog-card');
      blogCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
      });
      
    }, 500); // Reduced loading time simulation
    
    // Original code for loading from JSON file (commented out)
    /*
    fetch('/data/blog-posts.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error loading blog posts');
        }
        return response.json();
      })
      .then(data => {
        let postsHTML = '';
        const posts = data.posts;
        
        // Determine how many posts to show based on container location
        const isHomepage = !window.location.pathname.includes('/blog/');
        const postsToShow = isHomepage ? Math.min(3, posts.length) : posts.length;
        
        for (let i = 0; i < postsToShow; i++) {
          const post = posts[i];
          const formattedDate = formatDate(post.publishedAt);
          const tagsHTML = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');
          
          postsHTML += `
            <div class="blog-card bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <img src="/${post.coverImage}" alt="${post.title}" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="mb-2">${tagsHTML}</div>
                <h3 class="text-xl font-bold mb-2">${post.title}</h3>
                <p class="text-gray-400 mb-4">${post.excerpt}</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">${formattedDate}</span>
                  <a href="/blog/${post.slug}.html" class="text-blue-500 hover:text-blue-400 font-medium">Read more</a>
                </div>
              </div>
            </div>
          `;
        }
        
        blogContainer.innerHTML = postsHTML;
        
        // Add fade-in animation
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
          card.classList.add('fade-in');
          card.style.animationDelay = `${index * 0.1}s`;
        });
      })
      .catch(error => {
        blogContainer.innerHTML = '<div class="text-center py-10"><p class="text-red-500">Error loading posts. Please try again later.</p></div>';
        console.error('Error:', error);
      });
    */
  }
});
