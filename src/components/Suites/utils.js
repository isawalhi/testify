import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';
import map from 'lodash/map';

export const getAllLabels = (suites) => {
  const allLabels = reduce(
    suites,
    (acc, suite) => {
      const { labels = [] } = suite;
      return [...acc, ...labels];
    },
    [],
  );
  const uniqLabels = uniq(allLabels);
  return map(uniqLabels, (label) => ({ label, value: label }));
};

export default { getAllLabels };
