function flattenHierarchicalMap(obj, prefix = '') {
    const result = {};
  
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          result[newKey] = value;
        } else {
          Object.assign(result, flattenHierarchicalMap(value, newKey));
        }
      } else {
        result[newKey] = value;
      }
    }
  
    return result;
  }
  
  console.log(flattenHierarchicalMap({
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1, 2, 3]
    }
  }));