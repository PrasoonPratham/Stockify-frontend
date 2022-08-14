import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter(),
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
};

export default config;
