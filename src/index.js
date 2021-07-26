import maxParams from './rules/max-params';

export const rules = {
  'max-params': maxParams,
};

export const configs = {
  recommended: {
    plugins: ['jl'],
    rules: {
      'jl/max-params': ['warn', { max: 3 }],
    },
  },
};
