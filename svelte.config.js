import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'output/client',
      assets: 'output/client',
	  fallback: 'index.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
